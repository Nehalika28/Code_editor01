import myLogo from './assets/logo.jpeg';
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import "./mainpage.css"
import "./App.css"
import { useSocket } from './SocketContext';
export default function MainPage() {
    const [roomid, setroomid] = useState("");
    const [username, setusername] = useState("")
    const navigate = useNavigate();
    const socket = useSocket(); 
    function generateRoomID() {
        const id = uuidv4();
        console.log(id)
        setroomid(id);
    }
    const handleuserid = (e: React.ChangeEvent<HTMLInputElement>) => {
        setroomid(e.target.value);
    };
    
   const join = () => {

    if (roomid.trim() === "" || username.trim() === "") {
        alert("Please enter Room ID and Username");
        return;
    }

    if (!socket || socket.readyState !== WebSocket.OPEN) {
        alert("WebSocket is not connected yet");
        return;
    }

    socket.send(JSON.stringify({
        type: "join",
        roomid: roomid.trim(),
        username: username.trim()
    }));

    socket.onmessage = (event) => {

        const data = JSON.parse(event.data);

        if (data.type === "join-success") {

            navigate(`/EditorPage/${roomid.trim()}`, {
                state: {
                    username: username.trim()
                }
            });

        }

        if (data.type === "join-error") {
            alert(data.message);
        }

    };
};    const handleusername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setusername(e.target.value)
    }
    return (

        <div>
            <div className="outerbody">
                <img src={myLogo} alt="My Logo" className="logo" />

                <h3 className="heading">Paste invitation ROOM ID</h3>

                <input type="text" placeholder="Room_id" className="input_box box01" value={roomid} onChange={handleuserid}></input>
                <input type="text" placeholder="Username" className="input_box box02" value={username} onChange={handleusername}></input>
                <div className="just">
                    <button className="join" onClick={join}>Join</button></div>

                <div className="footer_div">
                    <p className="footer">If you don't have an invite then create <a className="footer_a" href="#" onClick={(e) => { e.preventDefault(); generateRoomID(); }}>new room </a></p></div>
            </div>
        </div>
    )
}