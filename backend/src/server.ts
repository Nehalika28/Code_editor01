
import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
    socket: WebSocket;
    roomid: string;
    username: string;
}

let AllSockets: User[] = [];



function broadcastUsers(roomid: string) {

    const users: string[] = [];

    for (let i = 0; i < AllSockets.length; i++) {

        if (AllSockets[i]?.roomid === roomid) {
            users.push(AllSockets[i]!.username);
        }
    }

    
    for (let i = 0; i < AllSockets.length; i++) {

        if (
            AllSockets[i]?.roomid === roomid &&
            AllSockets[i]?.socket.readyState === WebSocket.OPEN
        ) {

            AllSockets[i]!.socket.send(JSON.stringify({
                type: "room-users",
                users: users
            }));
        }
    }
}


wss.on("connection", (socket) => {

    console.log("New client connected");

    socket.on("message", (data) => {

        try {

            const message = JSON.parse(data.toString());


            
            if (message.type === "join") {

                const { roomid, username } = message;

             
                if (
                    typeof roomid !== "string" ||
                    typeof username !== "string" ||
                    !roomid.trim() ||
                    !username.trim()
                ) {

                    socket.send(JSON.stringify({
                        type: "join-error",
                        message: "Room ID and username required"
                    }));

                    return;
                }

                const cleanRoomid = roomid.trim();
                const cleanUsername = username.trim();

                
                let previousRoomid: string | null = null;

                for (let i = 0; i < AllSockets.length; i++) {

                    if (AllSockets[i]?.socket === socket) {
                        previousRoomid = AllSockets[i]!.roomid;
                        break;
                    }
                }

                for (let i = 0; i < AllSockets.length; i++) {

                    if (AllSockets[i]?.socket === socket) {
                        AllSockets.splice(i, 1);
                        break;
                    }
                }

          
                AllSockets.push({
                    socket,
                    roomid: cleanRoomid,
                    username: cleanUsername
                });

               
                socket.send(JSON.stringify({
                    type: "join-success",
                    roomid: cleanRoomid,
                    username: cleanUsername
                }));

                console.log(`${cleanUsername} joined room ${cleanRoomid}`);

                
                if (previousRoomid !== null && previousRoomid !== cleanRoomid) {
                    broadcastUsers(previousRoomid);
                }

             
                broadcastUsers(cleanRoomid);
            }


            else if (message.type === "get-users") {

                const roomid = message.roomid;

                if (typeof roomid !== "string" || !roomid.trim()) {

                    socket.send(JSON.stringify({
                        type: "error",
                        message: "Invalid room ID"
                    }));

                    return;
                }

                const cleanRoomid = roomid.trim();

          
                let isMember = false;

                for (let i = 0; i < AllSockets.length; i++) {

                    if (
                        AllSockets[i]?.socket === socket &&
                        AllSockets[i]?.roomid === cleanRoomid
                    ) {
                        isMember = true;
                        break;
                    }
                }

                if (!isMember) {

                    socket.send(JSON.stringify({
                        type: "error",
                        message: "Join the room first"
                    }));

                    return;
                }

             
                const users: string[] = [];

                for (let i = 0; i < AllSockets.length; i++) {

                    if (AllSockets[i]?.roomid === cleanRoomid) {
                        users.push(AllSockets[i]!.username);
                    }
                }

                console.log("Users found:", users);

                socket.send(JSON.stringify({
                    type: "room-users",
                    users: users
                }));
            }

        }

        catch (error) {

            socket.send(JSON.stringify({
                type: "error",
                message: "Invalid JSON"
            }));

        }

    });


  
    socket.on("close", () => {

        
        let disconnectedRoomid: string | null = null;

        for (let i = 0; i < AllSockets.length; i++) {

            if (AllSockets[i]?.socket === socket) {
                disconnectedRoomid = AllSockets[i]!.roomid;
                break;
            }
        }

   
        for (let i = 0; i < AllSockets.length; i++) {

            if (AllSockets[i]?.socket === socket) {
                AllSockets.splice(i, 1);
                break;
            }
        }

       

        if (disconnectedRoomid !== null) {
            broadcastUsers(disconnectedRoomid);
        }

    });
    socket.on("error", (error) => {
        console.log("WebSocket error:", error.message);
    });

});


console.log("WebSocket server running on port 8080");
