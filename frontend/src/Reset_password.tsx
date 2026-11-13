

import { useSearchParams,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Reset_Password() {
  const navigate=useNavigate();
  const [new_password, set_new_password]=useState("");
    const [confirm_password, set_confirm_password]=useState("");
  const send_data=async ()=>{
    try{
      if(!new_password ||!confirm_password){
        console.log("all fields is required");
        return ;
      }
      if(new_password!==confirm_password){
        console.log("both password need to be same");
        return ;
      }
      const response=await axios.post("http://localhost:3000/reset_password",{
        new_password,
        confirm_password
      },{
         params: {
            token: token
        }
      })
      console.log(response.data);
      navigate("/Login")
    }
    catch(error){
      console.log(error)
        if (axios.isAxiosError(error)) {
            console.log("Status:", error.response?.status);
            console.log("Backend message:", error.response?.data);
            console.log("Request URL:", error.config?.url);
        }
    }
  }
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  console.log("Reset Token:", token);

  return (
    <div>
      <div style={{ color: "white" ,display:"flex",flexDirection:"column",margin:"100px 300px",background:"rgb(38, 38, 36)",padding:"20px",borderRadius:"20px"}}>
        <h1 style={{background:"rgb(38, 38, 36)"}}>Reset Password</h1>
        <label htmlFor="new_password" style={{background:"rgb(38, 38, 36)",marginTop:"20px"}}>New Password</label>
        <input id="new_password" type="password" name="email" placeholder="new_password" style={{background:"white",marginTop:"20px",padding:"10px",borderRadius:"10px"}} value={new_password} onChange={(e)=>set_new_password(e.target.value)}/>
        <label htmlFor="confirm_password" style={{background:"rgb(38, 38, 36)",marginTop:"20px"}}>Confirm Password</label>
        <input id="confirm_password" type="password" name="email" placeholder="confirm_password" style={{background:"white",marginTop:"20px",padding:"10px",borderRadius:"10px"}} value={confirm_password} onChange={(e)=>set_confirm_password(e.target.value)}/>
        <button style={{color:"white",marginTop:"20px",padding:"10px",borderRadius:"10px"}} onClick={send_data}>Reset</button>
      </div>
    </div>
  );
}