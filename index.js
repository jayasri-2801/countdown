import express from "express"
import dotenv from "dotenv"
dotenv.config()

import cors from "cors"
import connectDB from "./database/connectDB.js"
import userRoutes from "./database/routes/userRoutes.js"
const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/user",userRoutes)

app.get("/",(req,res)=>{
    res.status(200).json({Message:"Api change successfully"})
})
app.get("/api/heart-beat",()=>{
    res.status(200).json({data:"Heart beat was successfull"})
})
app.listen(process.env.PORT, ()=>{
    console.log(`Server running successfully at port ${process.env.PORT}`)
})

connectDB();