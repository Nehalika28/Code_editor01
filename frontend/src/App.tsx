import MainPage from "./mainpage";
import { SocketProvider } from "./SocketContext";
import EditorPage from "./EditorPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./Signup";
import Login from "./Login";
import Otp from "./Otp";

export default function App() {
  return (
    <div>

    <SocketProvider>
    <BrowserRouter>
        <Routes>
        <Route path="/verify-otp" element={<Otp />} />
            <Route path="/MainPage" element={<MainPage />} />
            <Route path="/EditorPage/:roomid" element={<EditorPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Signup />} />
        </Routes>
    </BrowserRouter>
</SocketProvider>
    </div>
  )
}