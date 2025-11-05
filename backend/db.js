import mongoose from "mongoose";
export async function connectDB() {
   await mongoose.connect("mongodb+srv://anshuman22190503013_db_user:200307anshu22@cluster0.utrhfaz.mongodb.net/linkedin?retryWrites=true&w=majority&appName=webApp")
.then(()=>{
  console.log("connected to mongodb")

})
.catch((err)=>{
  console.log("error connecting to mongodb",err)
})
}

const userSchema=new mongoose.Schema({
  email:{type:String,required:true,unique:true},
  username:String,
  password:String
  }

)
 const User=mongoose.model('User',userSchema)


const postSchema=new mongoose.Schema({
  content:String,
  timestamp:{type:Date,default:Date.now},
  username:String,
  user:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
})
const Post=mongoose.model('Post',postSchema)
export{User,Post};
