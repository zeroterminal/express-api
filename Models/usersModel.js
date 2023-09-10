import mongoose from 'mongoose';

const Users = new mongoose.Schema({
    Username: { type: String, required: true, unique: true },
    Name:     { type: String, required: true },
    Email:    { type: String, required: true, unique: true },
    Level:    { type: String },
    Password: { type: String, required: true },
    date:     { type: Date, default: Date.now },
    comments: { body: String, date: Date },
    Likes:    { type: String },
    Dislikes: { type: String },
    Phone:    { type: Number },
    Active:   { type: Boolean }
});

const User = mongoose.model('User', Users);

export default User;