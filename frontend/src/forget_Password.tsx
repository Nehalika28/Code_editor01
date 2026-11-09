import { useState } from "react";
import axios from "axios";
import "./Forget_password.css";

export default function Forget_Password() {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const send_email = async () => {
    if (!email) {
      alert("Email is required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/forget_password", {
        email,
      });
      setStatusMessage(response.data.message);
    } catch (error) {
      setStatusMessage( "Failed to send email");
    }
  };

  return (
    <div>
      <div className="inner_forget_password">
        <h1 className="forget_password_h">Password reset</h1>
        <p style={{ marginTop: "20px", background: "rgb(38, 38, 36)" }}>
          You will receive instructions for resetting your password.
        </p>
        <input
          type="email"
          placeholder="Your email address"
          style={{ background: "white", padding: "10px", marginTop: "20px", borderRadius: "10px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          style={{ background: "black", color: "white", padding: "10px", marginTop: "20px", borderRadius: "10px" }}
          onClick={send_email}
        >
          Send
        </button>
        {statusMessage && <p style={{ marginTop: "15px" }}>{statusMessage}</p>}
      </div>
    </div>
  );
}
