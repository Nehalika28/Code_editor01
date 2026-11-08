import "./Signup.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [color, setcolor] = useState("");
    const [email,setEmail]=useState("")
   
    const [loading, setLoading] = useState(false);

    const senddata = async () => {   
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        const color1 = `rgb(${r}, ${g}, ${b})`;

        setcolor(color1);

        try {
            if (password !== confirmpassword) {
                alert("Passwords do not match!");
                return;
            }
             setLoading(true);
             if (!username.trim() || !email.trim() || !password || !confirmpassword) {
        alert("Please fill all fields");
        return;
    }
            const res = await axios.post("http://localhost:3000/signup", {
                username,
                email,
                password,
                confirmpassword,
                color: color1
            })
            console.log(res.data)
             navigate("/Login")
        }
        catch (error) {
            console.log("Signup failed:", error)

        }
         finally {
        setLoading(false);
    }

    }
    const navigate = useNavigate();
    return (
        <div className="outer">
            <div className="inner">
                <div className="inner01">
                    <h1>Sign up</h1>
                    <input type="text" placeholder="username" value={username} onChange={(e) => { setUsername(e.target.value) }}></input>
                    <input type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    <input type="password" placeholder="password" value={password} onChange={(e) => { setpassword(e.target.value) }}></input>
                    <input type="password" placeholder="confirm password" value={confirmpassword} onChange={(e) => { setconfirmpassword(e.target.value) }}></input>
                    <button className="sign" onClick={senddata}>Sign up</button>
                    <p className="para">Already have an account?<a href="#" onClick={(e) => { e.preventDefault(); navigate("/Login"); }}> Log in</a></p>
                    <p className="para">OR</p>
                    <button className="google">Sign up with Google</button>
                </div>
            </div>
        </div>
    )
}