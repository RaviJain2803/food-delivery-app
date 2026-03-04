import mongoose from "mongoose";

export const connectDB = async()=>{
   await mongoose.connect('mongodb+srv://jravi1101:28031999@cluster0.4rtdsqh.mongodb.net/food-delivery').then(()=>{
    console.log("DB Connected")
    
   })
}