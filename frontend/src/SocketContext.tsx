
import React, { createContext, useContext, useEffect, useState } from 'react';

const SocketContext = createContext<WebSocket | null>(null);

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {

    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {

        const ws = new WebSocket('ws://localhost:8080');

        setSocket(ws);
        ws.onopen = () => {
    console.log("WebSocket Connected");
};

ws.onerror = () => {
    console.log("WebSocket Error");
};

ws.onclose = () => {
    console.log("WebSocket Disconnected");
};

    }, []);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocket = () => useContext(SocketContext);
