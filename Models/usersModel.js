import mongoose from "mongoose";
const { Schema } = mongoose;
const Users = new mongoose.Schema({
    Username: { type: String, required: true, unique: true },
    Name:     { type: String, required: true },
    Email:    { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    date:     { type: Date, default: Date.now },
    comments: { body: String, date: Date },
    Likes:    { type: String },
    Dislikes: { type: String },
    Phone:    { type: Number },
    Active:   { type: Boolean }
})

export default Users;