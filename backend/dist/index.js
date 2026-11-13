import express from "express";
import crypto from "crypto";
import { OAuth2Client } from "google-auth-library";
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
if (!GOOGLE_CLIENT_ID) {
    throw new Error("GOOGLE_CLIENT_ID is missing in .env");
}
const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);
const app = express();
import nodemailer from "nodemailer";
app.use(express.json());
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const ACCESS_TOKEN = "RANDOM";
const REFRESH_TOKEN = "RANDOM";
const RESET_TOKEN = "RANDOM";
import cors from "cors";
import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
app.use(cors());
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
});
const prisma = new PrismaClient({ adapter });
app.post("/signup", async (req, res) => {
    const { username, password, confirmpassword, color, email } = req.body;
    try {
        if (!username || !password || !confirmpassword || !color || !email) {
            return res.status(400).json({
                message: "all fields is required"
            });
        }
        if (password !== confirmpassword) {
            return res.status(400).json({
                message: "password and confirm password needs to be same"
            });
        }
        const user01 = await prisma.user.findUnique({
            where: {
                email: email
            },
        });
        if (user01) {
            return res.status(400).json({
                message: "user already exist"
            });
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                email,
                username,
                password: hashedpassword,
                color
            }
        });
        console.log(user);
        return res.status(201).json({
            message: "user signed up",
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                color: user.color
            }
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "something went wrong"
        });
    }
});
app.post("/login", async (req, res) => {
    const { username, password, email } = req.body;
    try {
        if (!username || !password || !email) {
            return res.status(400).json({
                message: "all fields is required"
            });
        }
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (!user) {
            return res.status(400).json({
                message: "user not found"
            });
        }
        if (!user.password) {
            return res.status(401).json({
                message: "This account uses Google Login. Please login with Google."
            });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }
        if (username !== user.username) {
            return res.status(401).json({
                message: "Invalid username"
            });
        }
        const otp = crypto.randomInt(1000, 10000).toString();
        const hashedOtp = await bcrypt.hash(otp, 10);
        await prisma.oTP.upsert({
            where: {
                userId: user.id
            },
            update: {
                otp: hashedOtp,
                expiresAt: new Date(Date.now() + 10 * 60 * 1000)
            },
            create: {
                otp: hashedOtp,
                userId: user.id,
                expiresAt: new Date(Date.now() + 10 * 60 * 1000)
            }
        });
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: "Your Login OTP",
            text: `Hello ${user.username},

Your OTP for login is: ${otp}

This OTP will expire in 10 minutes.

If you did not try to login, please ignore this email.

Thank you.`
        });
        return res.status(200).json({
            message: "OTP sent successfully"
        });
    }
    catch (error) {
        console.error("LOGIN ERROR:", error);
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
});
app.post("/verify", async (req, res) => {
    const { otp, email } = req.body;
    try {
        if (!otp || !email) {
            return res.status(400).json({
                message: "Email and OTP are required"
            });
        }
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (!user) {
            return res.status(401).json({
                message: "user not found"
            });
        }
        const otpRecord = await prisma.oTP.findUnique({
            where: {
                userId: user.id
            }
        });
        if (!otpRecord) {
            return res.status(401).json({
                message: "otp not found"
            });
        }
        if (otpRecord.expiresAt < new Date()) {
            await prisma.oTP.delete({
                where: { userId: user.id }
            });
            return res.status(400).json({
                message: "OTP expired"
            });
        }
        const matchotp = await bcrypt.compare(String(otp), otpRecord.otp);
        if (!matchotp) {
            return res.status(400).json({
                message: "incorrect otp"
            });
        }
        await prisma.oTP.delete({
            where: {
                userId: user.id
            }
        });
        const accesstoken = jwt.sign({
            email,
        }, ACCESS_TOKEN, { expiresIn: "15m" });
        const refreshtoken = jwt.sign({
            email,
        }, REFRESH_TOKEN, { expiresIn: "7d" });
        const user01 = await prisma.refreshToken.create({
            data: {
                token: refreshtoken,
                userId: user.id,
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            }
        });
        res.header("accesstoken", accesstoken);
        res.header("refreshtoken", refreshtoken);
        return res.status(200).json({
            message: "Logged in successfully",
            accesstoken,
            refreshtoken
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: "something went wrong"
        });
    }
});
app.post("/forget_password", async (req, res) => {
    const email = req.body.email;
    try {
        if (!email) {
            return res.status(400).json({
                message: "email is required"
            });
        }
        const user = await prisma.user.findUnique({
            where: {
                email: email
            },
        });
        if (!user) {
            return res.status(400).json({
                message: "email enter is wrong"
            });
        }
        const token = jwt.sign({ email }, RESET_TOKEN, { expiresIn: "10m" });
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
        await prisma.reset_token.upsert({
            where: { userId: user.id },
            update: {
                token: token,
                expiresAt: expiresAt
            },
            create: {
                userId: user.id,
                token: token,
                expiresAt,
            },
        });
        const resetLink = `http://localhost:5173/reset_password?token=${token}`;
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Reset Your Password',
            text: `Hello ${user.username},

Your reset password  for your code_editor accounf is: ${resetLink}

If you did not try to reset password, please ignore this email.

Thank you.`
        });
        return res.status(200).json({
            message: "OTP sent successfully"
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: "something went wrong"
        });
    }
});
app.post("/reset_password", async (req, res) => {
    const token = req.query.token;
    const new_password = req.body.new_password;
    const confirm_password = req.body.confirm_password;
    try {
        if (!token || !new_password || !confirm_password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }
        if (typeof token !== "string") {
            return res.status(400).json({
                message: "Valid token is required"
            });
        }
        if (new_password !== confirm_password) {
            return res.status(400).json({
                message: "Passwords do not match"
            });
        }
        const user = await prisma.reset_token.findUnique({
            where: {
                token: token
            }
        });
        if (!user) {
            return res.status(400).json({
                message: "Invalid token"
            });
        }
        if (new Date() > user.expiresAt) {
            return res.status(400).json({
                message: "Token expired"
            });
        }
        const user01 = await prisma.user.findUnique({
            where: {
                id: user.userId
            }
        });
        if (!user01) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        if (!user01.password) {
            return res.status(400).json({
                message: "Password is not set for this account. Please use Google login."
            });
        }
        const isPasswordCorrect = await bcrypt.compare(new_password, user01.password);
        if (isPasswordCorrect) {
            return res.status(400).json({
                message: "New password cannot be the same as old password"
            });
        }
        const hashedPassword = await bcrypt.hash(new_password, 10);
        await prisma.$transaction([
            prisma.user.update({
                where: {
                    id: user01.id
                },
                data: {
                    password: hashedPassword
                }
            }),
            prisma.reset_token.delete({
                where: {
                    token: token
                }
            })
        ]);
        return res.status(200).json({
            message: "Password reset successfully"
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
});
app.post("/auth/google", async (req, res) => {
    const { credential } = req.body;
    try {
        // Step 1: Check Google credential
        if (!credential) {
            return res.status(400).json({
                message: "Google credential is required"
            });
        }
        // Step 2: Verify Google ID token
        const ticket = await googleClient.verifyIdToken({
            idToken: credential,
            audience: GOOGLE_CLIENT_ID
        });
        // Step 3: Get Google user information
        const payload = ticket.getPayload();
        if (!payload || !payload.sub || !payload.email) {
            return res.status(401).json({
                message: "Google user information missing"
            });
        }
        // Step 4: Verify Google email
        if (payload.email_verified !== true) {
            return res.status(401).json({
                message: "Google email is not verified"
            });
        }
        // Step 5: Extract user information
        const googleId = payload.sub;
        const email = payload.email;
        const username = payload.name || email.split("@")[0] || "GoogleUser";
        // Step 6: Find existing Google account
        const existingGoogleAccount = await prisma.googleAccount.findUnique({
            where: {
                googleId: googleId
            },
            include: {
                user: true
            }
        });
        // Step 7: Find or create user
        let user;
        if (existingGoogleAccount) {
            // Existing Google user
            user = existingGoogleAccount.user;
        }
        else {
            // Check whether email already exists
            const existingUser = await prisma.user.findUnique({
                where: {
                    email: email
                }
            });
            if (existingUser) {
                return res.status(409).json({
                    message: "Account already exists with this email. Please login using your existing account."
                });
            }
            // Create new user
            const newUser = await prisma.user.create({
                data: {
                    email: email,
                    username: username,
                    password: null,
                    color: "#3498db"
                }
            });
            // Create Google account
            await prisma.googleAccount.create({
                data: {
                    googleId: googleId,
                    email: email,
                    userId: newUser.id
                }
            });
            user = newUser;
        }
        // Step 8: Generate Access Token
        const accesstoken = jwt.sign({ email: user.email }, ACCESS_TOKEN, { expiresIn: "15m" });
        // Step 9: Generate Refresh Token
        const refreshtoken = jwt.sign({ email: user.email }, REFRESH_TOKEN, { expiresIn: "7d" });
        // Step 10: Store Refresh Token in Database
        await prisma.refreshToken.create({
            data: {
                token: refreshtoken,
                userId: user.id,
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            }
        });
        // Step 11: Send response
        return res.status(200).json({
            message: "Google authentication successful",
            user: {
                id: user.id,
                email: user.email,
                username: user.username
            },
            accesstoken,
            refreshtoken
        });
    }
    catch (error) {
        console.error("GOOGLE AUTH ERROR:", error);
        return res.status(401).json({
            message: "Google authentication failed"
        });
    }
});
app.listen(3000, () => {
    console.log("server running on port 3000");
});
//# sourceMappingURL=index.js.map