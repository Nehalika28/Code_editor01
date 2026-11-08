import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setEmail] = useState("")
    const senddata = async () => {
        try {

            if (!username || !password || !email) {
                alert("Please fill all fields");
                return;
            }
            const res = await axios.post("http://localhost:3000/login", {
                username,
                password,
                email


            })
            console.log(res.data)
            navigate("/verify-otp", {
    state: { email }
});
        }
       catch (error) {
    if (axios.isAxiosError(error)) {
        console.log("Backend error:", error.response?.data);
        console.log("Status:", error.response?.status);
    } else {
        console.log(error);
    }
}
    }
    return (
        <div style={{ color: "white" }}>
            <div className="inner">
                <div className="inner01">
                    <h1>Login</h1>
                    <input type="text" placeholder="username" value={username} onChange={(e) => { setUsername(e.target.value) }}></input>
                    <input type="password" placeholder="password" value={password} onChange={(e) => { setpassword(e.target.value) }}></input>
                    <input type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    <button className="sign" onClick={senddata}>Log in</button>
                    <p className="para"> Not have an account?<a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}> Sign up</a></p>

                </div>
            </div>
        </div>
    )
}