import express from "express";
import cors from "cors";
const  app=express()
import {User,Post,connectDB} from "./db.js"
app.use(cors({
  origin:"*",
  methods:["GET","POST","PUT","DELETE"],
  
})); 
app.use(express.json());


/*app.get("/", (req, res) => {
  res.send("Server is running fine!");
});*/   

app.post("/register",async(req,res)=>{
const {email,username,password}=req.body
if(!email || !username || !password){
  return res.status(400).json({message:"All fields are required"})
}
else{
  const user=await User.findOne({email:email});
  if(user){
    return res.status(400).json({message:"User already exists"})
  }
  else{
    await User.create({email,username,password});
    return res.status(201).json({message:"User registered successfully"})
  }
}
})

app.post("/login",async(req,res)=>{
  const{email,password}=req.body
  if(!email || !password)
    return res.status(400).json({message:"All fields are required"});
  else{
    const user=await User.findOne({email:email});
    if(!user || user.password!==password){
      return res.status(400).json({message:"Invalid credentials"})
  }
  else
  {
    return res.status(200).json({message:"Login successful"})
  }}
})
app.post("/posts",async(req,res)=>{
  const{content,email}=req.body;
  if(!content || !email)
    return res.status(400).json({message:"Content and email are required"});
  else{
    const user=await User.findOne({email:email});
    if(!user)
     return res.status(400).json({message:"User not found"});
    else{
      await Post.create({content:content,username:user.username,user:user._id});
      return res.status(201).json({message:"Post created successfully"});
    }
  }
})



app.get("/username", async(req, res) => {
   const email=req.headers.email;
   const user=await User.findOne({email:email})
    if(!user){
      return res.status(400).json({message:"User not found"});
    }
    else{
      return res.status(200).json({username:user.username});
    }
})


app.get("/posts",async(req,res)=>{
  const posts=await Post.find().sort({timestamp:-1});
  return res.status(200).json(posts);
})

app.listen(4000,async()=>{
  await connectDB();
  console.log("Server is running on port 4000")
})