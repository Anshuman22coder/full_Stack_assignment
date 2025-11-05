import React, { use } from "react";
import Cookie from "js-cookie";
import {useState,useEffect,useMemo} from "react";
import axios from "axios";
import{useNavigate} from "react-router-dom"
export default function CreatePost() {

const [username, setUsername] = useState("");
const [content, setContent] = useState("");

useEffect(() => {
setUsername(Cookie.get("username"))}, []);

return (
  <>
  <h2>Create Post</h2>
  <p>Logged in as: {username}</p>
  <div>
   <form onSubmit={async(e)=>{
    e.preventDefault();
   const email=Cookie.get("email")

    console.log({content,email});
    try{
      const response =await axios.post("http://localhost:4000/posts",{
        email,
        content
      })
      alert(response.data.message);
      
    
      setContent("");
    }
    catch(err){
      alert(err.response?.data?.message||"Error in login");
    }}}
    
    >
    
    <br/>
    <label>Post message:</label>
    <input type="text" required={true} value={content} onChange={(e)=>setContent(e.target.value)}/>
    <br/>
    <br/>
    <button type="submit" style={{height:"60px",width:"80px", borderRadius:"20px"}}>Post</button>
   </form>
   </div>
  </>
)
}