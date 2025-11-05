import React from 'react'
import { useEffect, useState, useMemo } from 'react'
import {BrowserRouter as Router, Routes,Route, Link, NavLink} from "react-router-dom"
import CreatePost from "./CreatePost"
import ShowPosts from "./ShowPosts"
import Landing from "./Landing"
import Login from "./Login"
import Signup from "./Signup"
import ProtectedRoute from "./ProtectedRoute"
function App() {
  
  return (
    <>
    <Router>
      <div style={{backgroundColor:"lightgray",padding:"10px", fontSize:"30px"}}>
      
      <nav style={{display:"flex",justifyContent:"space-around"}}>
        <div><NavLink to="/"style={({isActive})=>({
          fontWeight:isActive?"bold":"normal",
          fontStyle: isActive ? "italic" : "normal",
          color:isActive?"black":"blue",
          textDecoration:isActive?"underline":"none"
         })}>Landing</NavLink></div>
        <div><NavLink to="/posts" style={({isActive})=>({
          fontWeight:isActive?"bold":"normal",
          fontStyle: isActive ? "italic" : "normal",
          color:isActive?"black":"blue",
          textDecoration:isActive?"underline":"none"
         })}>Show Posts</NavLink></div>
        <div><NavLink to="/create-post" style={({isActive})=>({
          fontWeight:isActive?"bold":"normal",
          fontStyle: isActive ? "italic" : "normal",
          color:isActive?"black":"blue",
          textDecoration:isActive?"underline":"none"
         })}>Create Post</NavLink></div>
      </nav>
      
      </div>
        
        <Routes> 
          <Route path="/" element={<Landing/>}>
           <Route path="/signup" element={<Signup/>}/>
           <Route path="/login" element={<Login/>}/>
          </Route>
          <Route path="/posts" element={<ProtectedRoute><ShowPosts/></ProtectedRoute>}/>
          <Route path="/create-post" element={<ProtectedRoute><CreatePost/></ProtectedRoute>}/>
        </Routes> 
    </Router>
    </>
  )
}

export default App
