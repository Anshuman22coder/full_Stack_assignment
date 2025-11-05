import axios from "axios";
import React, { use } from "react";
import {useState,useEffect,useMemo} from "react";
export default function ShowPosts() {
 const [posts, setPosts] = useState([]);

 useEffect(() => {
   // Fetch posts from the backend API
   async function fetchPosts() {
      try { 
        const response=await axios.get("https://full-stack-assignment-1-ra5o.onrender.com/posts")
        setPosts(response.data);
      }
      catch(err){
        alert(err.response?.data?.message || "Error fetching posts:");
      }}
      fetchPosts()}, []);
  return (
    <>
      <div>
        <h2>Posts</h2>
        {posts.map((post,index)=>(
          <div key={index}>
            <p><strong>{post.username}</strong>:{post.content}</p> 
           <p>{new Date(post.timestamp).toLocaleString()}</p>
         </div>

        ))}
      </div>
    </>
  );
}
