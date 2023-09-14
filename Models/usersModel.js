import mongoose from "mongoose";

const Users = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	level: { type: String },
	password: { type: String, required: true },
	date: { type: Date, default: Date.now },
	comments: { body: String, date: Date },
	likes: { type: String },
	dislikes: { type: String },
	phone: { type: Number },
	active: { type: Boolean },
});

const User = mongoose.model("User", Users);

export default User;
