import React from "react";
import {useState,useEffect,useMemo} from "react";
import axios from "axios";
import{useNavigate} from "react-router-dom"
export default function Signup() {
   const navigate=useNavigate();
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");

return (
  <>
  <div>
   <form onSubmit={async(e)=>{
    e.preventDefault();

    console.log({username,password,email});
    try{
      const response =await axios.post("http://localhost:4000/register",{
        email,
        username,
        password
      })
      alert(response.data.message);

      setUsername("");
      setPassword("");
      setEmail("");
      navigate("/login");
    }
    catch(err){
      alert(err.response?.data?.message||"Error in registration");
    }}}
    
    >
      <br/>
    <label>Username:</label>
    <input type="text" required={true} value={username} onChange={(e)=>setUsername(e.target.value)}/>
    <br/>
    <br/>
    <label>Password:</label>
    <input type="password" required={true} value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <br/>
    <br/>
    <label>Email:</label>
    <input type="email" required={true} value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <br/>
    <br/>
    <button type="submit" style={{height:"60px",width:"80px", borderRadius:"20px"}}>Signup</button>
   </form>
   </div>
  </>
)
}