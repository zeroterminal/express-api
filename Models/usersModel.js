import mongoose from "mongoose";

const Users = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    user_picture: { type: String },
    name: { type: String },
    email: { type: String, unique: true },
    level: { type: String },
    password: { type: String },
    date: { type: Date, default: Date.now },
    comments: { body: String, date: Date },
    likes: { type: Array },
    dislikes: { type: Array },
    phone: { type: Number },
    files: { type: Array },
    active: { type: Boolean, default: 1 },
});

const User = mongoose.model("User", Users);

export default User;