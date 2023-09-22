import express from "express";
import mongoose from "mongoose";
const PORT=5555;
const app=express();



app.get('/',(req,res)=>{
  return res.status(234).send('welcome to my new project');
})
mongoose.connect("mongodb://localhost:27017/bookstoreDB",{useNewUrlParser:true})
.then(()=>{
  console.log("app is connected to databse")
  app.listen(PORT, ()=>{
    console.log(`App listening in ${PORT}`);
});
})
.catch(()=>{
  console.log(error)
});

