import React from "react";
import {BrowserRouter as Router, Routes,Route, Link, NavLink} from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import { Outlet } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute"
export default function Landing() {
  return (
    <>
      <div style={{height:"80vh", backgroundColor:"whitesmoke",padding:"200px",fontSize:"20px"}}>
        <nav style={{display:"flex",justifyContent:"space-around",backgroundColor:"lightgray",padding:"10px"}}>
         <div><NavLink  to="/login" style={({isActive})=>({
          fontWeight:isActive?"bold":"normal",
          color:isActive?"black":"gray",
          textDecoration:isActive?"underline":"none"
         })}>Login</NavLink></div> 
          <div><NavLink to="/signup"style={({isActive})=>({
          fontWeight:isActive?"bold":"normal",
          color:isActive?"black":"gray",
          textDecoration:isActive?"underline":"none"
         })}>Signup</NavLink></div>
        </nav>
        <Outlet/>
        </div> 
    </>
  )}
  //The <Outlet /> component in React Router is used to render child routes inside a parent route