
import { useParams, useLocation } from "react-router-dom";
import mylogo from "./assets/logo.jpeg";
import "./App.css";
import "./EditorPage.css";
import { useState, useEffect } from "react";
import { useSocket } from './SocketContext';
export default function EditorPage() {
    const { roomid } = useParams();
    const location = useLocation();

    const currentUsername = location.state?.username || "Anonymous";
    const socket = useSocket();
    const [user, setuser] = useState<string[]>([]);

    
const [copied, setCopied] = useState(false);

const copy_roomid = async () => {
    try {
        await navigator.clipboard.writeText(roomid || "");

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);

    } catch (error) {
        console.log(error);
    }
};

    useEffect(() => {
        if (!socket) {
            console.log("Socket not found");
            return;
        }

        console.log("Socket found!");

        const handleMessage = (event: MessageEvent) => {
            const data = JSON.parse(event.data);

            if (data.type === "room-users") {
                setuser(data.users);
            }
        };

        socket.addEventListener("message", handleMessage);

        if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({
                type: "get-users",
                roomid: roomid
            }));
        }

        return () => {
            socket.removeEventListener("message", handleMessage);
        };

    }, [socket, roomid]);

    return (
        <div style={{ background: "black", color: "white", minHeight: "100vh" }}>
            <div className="main">
                <div className="left_side">
                    <img src={mylogo} className="logo" />

                    <h3>Connected Users</h3>

                    <div className="connected_users">
                        {user.map((username, index) => (
                            <div className="user_item" key={index}>
                                {username}
                            </div>
                        ))}
                    </div>
                    <div className="btn">
                        <button className="copy_roomid" onClick={copy_roomid}>Copy RoomId</button>
                        <button className="leave"> Leave</button>
                    </div>
                </div>

                <div className="right_side">
                    <p>Hi</p>
                </div>
            </div>
        </div>
    );
}
