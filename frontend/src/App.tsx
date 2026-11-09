import MainPage from "./mainpage";
import { SocketProvider } from "./SocketContext";
import EditorPage from "./EditorPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./Signup";
import Login from "./Login";
import Otp from "./Otp";
import Forget_Password from "./forget_Password";
import Reset_Password  from './Reset_Password';

export default function App() {
  return (
    <div>

    <SocketProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/reset_password/:token" element={<Reset_Password />} />
        <Route path="/verify-otp" element={<Otp />} />
        <Route path="/forget_password" element={<Forget_Password/> } />
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