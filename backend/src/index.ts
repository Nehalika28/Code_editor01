import express from "express";
import crypto from "crypto";

const app = express();
import nodemailer from "nodemailer";

app.use(express.json());
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const ACCESS_TOKEN = "RANDOM";
const REFRESH_TOKEN = "RANDOM";
import cors from "cors";
import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg"
app.use(cors());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!
})
const prisma = new PrismaClient({ adapter })
app.post("/signup", async (req, res) => {
    const { username, password, confirmpassword, color, email } = req.body;
    try {
        if (!username || !password || !confirmpassword || !color || !email) {
            return res.status(400).json({
                message: "all fields is required"
            })
        }
        if (password !== confirmpassword) {
            return res.status(400).json({
                message: "password and confirm password needs to be same"
            })
        }
        const user01 = await prisma.user.findUnique({
            where: {
                email: email
            },
        });
        if (user01) {
            return res.status(400).json({
                message: "user already exist"
            })
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                email,
                username,
                password: hashedpassword,
                color

            }
        })
        console.log(user)
        return res.status(201).json({
            message: "user signed up",
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                color: user.color
            }
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "something went wrong"
        })
    }
})
app.post("/login", async (req, res) => {
    const { username, password, email } = req.body;
    try {
        if (!username || !password || !email) {
            return res.status(400).json({
                message: "all fields is required"
            })
        }
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (!user) {
            return res.status(400).json({
                message: "user not found"
            })
        }
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

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

})
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
            })
        }
          const otpRecord = await prisma.oTP.findUnique({
            where: {
                userId: user.id
            }
        });
        if (!otpRecord) {
            return res.status(401).json({
                message: "otp not found"
            })
        }
         if (otpRecord.expiresAt < new Date()) {
            await prisma.oTP.delete({
                where: { userId: user.id }
            });

            return res.status(400).json({
                message: "OTP expired"
            });
        }
        const matchotp = await bcrypt.compare(
            String(otp),
            otpRecord.otp
        );
        if (!matchotp) {
            return res.status(400).json({
                message: "incorrect otp"
            })
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
    }, REFRESH_TOKEN, { expiresIn: "7d" })



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
        console.log(error)
        res.status(400).json({
            message: "something went wrong"
        })
    }
})
app.listen(3000, () => {
    console.log("server running on port 3000")
})

