import User from "../Models/usersModel.js";
import express from "express";
import mongoose from "mongoose";
const usersController = express.Router();

usersController.post("/create/admin", (req, res) => {
	res.json("CREATED username ADMIN and password P@ssword");
	let admin = new User({
		Username: "admin",
		Name: "admin",
		Email: "admin@zoned",
		Password: "P@ssword",
		Level: "Admin",
	});
	admin.save();
});

usersController.delete("/delete/everything", async (req, res) => {
	const delete_all = await User.deleteMany({});
	if (!delete_all) {
		res.status(404).json({ message: "Error." });
	} else {
		res.status(200).json({ message: "Database Wiped." });
	}
});

usersController.post("/create/randoms", async (req, res) => {
	res.json("CREATED random accounts, check /users to view them");
	let randoms = [
		new User({
			Username: "pizza",
			Name: "myuwi",
			Email: "noob@zonednetwork.com",
			Password: "I-like-small-mushrooms",
			Level: "noob",
		}),

		new User({
			Username: "zero",
			Name: "Jay",
			Email: "Jay@zonednetwork.com",
			Password: "123",
			Level: "Admin",
		}),

		new User({
			Username: "clot",
			Name: "blut im Venen",
			Email: "Venen@zonednetwork.com",
			Password: "Schisse",
			Level: "schisse",
		}),
	];
	await User.insertMany(randoms);
});

usersController.get("/", async (req, res) => {
	const users = await User.find();
	res.json(users);
});

usersController.delete("/delete/:username", async (req, res) => {
	const userToDelete = req.params.username;

	let deleteUser;

	try {
		deleteUser = await User.findOne({ username: userToDelete });
	} catch (err) {
		res.status(404).json({ message: err });
		return;
	}
	// return; // Return from the function to prevent the code below from being executed.

	// Only execute this code if the `deleteUser` variable is not undefined.
	if (deleteUser) {
		await deleteUser.deleteOne();
		res.status(200).json({ message: "Succesfully Deleted " + username });
	} else {
		res.json({ message: userToDelete });
		// res.status(404).json({ message: "User not found." });
		return;
	}
	res.json({ message: "nothing" });
});

usersController.put("/edit/:username", async (req, res) => {
	try {
		const { id } = req.params.username;
		// const editUser = await User.
	} catch (error) {
		res.json({
			message: error.message,
		});
	}
});

usersController.post("/create", (req, res) => {
	const createUser = new User({
		Username: req.body.Username,
		Name: req.body.Name,
		Email: req.body.Email,
		Password: req.body.Password,
		Level: req.body.Level,
	});
	createUser.save();
	return res.json({
		message: "Successfully Created " + req.body.Username,
	});
});

export default usersController;

// class UsersController {
//   static login = async (req, res) => {
//     const { username, password, email } = req.body;

//     try {
//       const username = await User.findOne({ username });
//       const password = await User.findOne({ password });

//       if (email && password) {
//         console.log("Email found", username, password);
//       }
//     } catch (error) {
//       console.log(error);
//       console.log("schbwshjcbecedj");
//     }
//   };
// }
// export default UsersController;
