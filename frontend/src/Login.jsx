import React from "react";
import Cookie from "js-cookie";
import {useState,useEffect,useMemo} from "react";
import axios from "axios";
import{useNavigate} from "react-router-dom"
export default function Login() {
   const navigate=useNavigate();

const [password, setPassword] = useState("");
const [email, setEmail] = useState("");

return (
  <>
  <div>
   <form onSubmit={async(e)=>{
    e.preventDefault();

    console.log({password,email});
    try{
      const response =await axios.post("http://localhost:4000/login",{   //only code 200 related errors here..
        email,
        password
      })
      const response2=await axios.get("http://localhost:4000/username",{
        headers:{email:email}})
      console.log(response2.data.username);
      Cookie.set("username",response2.data.username,{path:"/",expires:1});
      Cookie.set("email",email,{path:"/",expires:1});  //expire in 1 day  path: "/" Means
      alert(response.data.message);
//It tells the browser to make the cookie accessible to all routes on your domain.
      setPassword("");
      setEmail("");
      navigate("/create-post");
    }
    catch(err){
      console.log(err);
      alert(err.response?.data?.message||"Error in login");
    }}}
    
    >
    
    <br/>
    <label>Password:</label>
    <input type="password" required={true} value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <br/>
     <br/>
    <label>Email:</label>
    <input type="email" required={true} value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <br/>
     <br/>
    <button type="submit" style={{height:"60px",width:"80px", borderRadius:"20px"}} >Login</button>
   </form>
   </div>
  </>
)
}