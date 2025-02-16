import cros from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/connectDB.js'

dotenv.config()
const app = express()
app.use(cros())

app.get("/api/users", (req, res) => {
    try{
        res.status(200).json({})
    }catch (error) {
        res.status(500).json({error: error.message})
    }
})
app.listen(process.env.PORT, () => {
    connectDB()
    console.log(`Server is mining on port ${process.env.PORT}`)
})