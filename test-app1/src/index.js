//require("dotenv").config({path:"./env"})
import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path: "./env"
})


connectDB()
.then(()=>{
    const port = process.env.PORT;

    app.listen(port || 8000, ()=>{
        console.log(`Server is runnong at port: ${port}`);
    })
})
.catch((err)=>{
    console.log("Mongo DB connection failed !",err);
})


