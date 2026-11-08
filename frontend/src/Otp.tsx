
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./Otp.css"
export default function VerifyOTP() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [loading, setLoading] = useState(false);

    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const navigate = useNavigate();
    const location = useLocation();

    // Pass email from Login page using navigate state
    const email = location.state?.email;

    const handleChange = (value: string, index: number) => {
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input
        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = async () => {
        const otpValue = otp.join("");

        if (otpValue.length !== 4) {
            alert("Please enter 4 digit OTP");
            return;
        }

        try {
            setLoading(true);

            const res = await axios.post(
                "http://localhost:3000/verify",
                {
                    otp: otpValue,
                    email
                }
            );

            console.log(res.data);

            // Save access token
            localStorage.setItem("accesstoken", res.data.accesstoken);

            navigate("/MainPage");

        } catch (error) {
            console.log("OTP verification failed:", error);
            alert("Invalid or expired OTP");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="otp-container">
            <h1>Verify OTP</h1>

            <p>Enter the 4-digit OTP sent to your email.</p>

            <div className="otp-inputs">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        ref={(el) => {
                            inputRefs.current[index] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) =>
                            handleChange(e.target.value, index)
                        }
                        onKeyDown={(e) =>
                            handleKeyDown(e, index)
                        }
                    />
                ))}
            </div>

            <button onClick={handleVerify} disabled={loading}>
                {loading ? "Verifying..." : "Verify OTP"}
            </button>
        </div>
    );
}
