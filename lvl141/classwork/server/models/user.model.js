import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: string,
    surname: string,
    age: number,
    avatar: string,
    address: string,
})
const User = mongoose.model("users")