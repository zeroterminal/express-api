import mongoose from "mongoose";

const Users = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	name: { type: String },
	email: { type: String, unique: true },
	level: { type: String },
	password: { type: String },
	date: { type: Date, default: Date.now },
	comments: { body: String, date: Date },
	likes: { type: String },
	dislikes: { type: String },
	phone: { type: Number },
	active: { type: Boolean, default: 1 },
});

const User = mongoose.model("User", Users);

export default User;
