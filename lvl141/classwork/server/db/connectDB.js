import mongoose from "mongoose";

const connect =async() => {
    try{
        const conn = await moongose.connect(process.env.MONGODB_URI)
        console.log(`mongoDB is`)
    }
}