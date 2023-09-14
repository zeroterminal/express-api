import User from "../Models/usersModel.js";
import express from "express";
const usersController = express.Router();

usersController.post("/create/admin", (req, res) => {
	res.json("CREATED username ADMIN and password P@ssword");
	let admin = new User({
		username: "admin",
		name: "admin",
		email: "admin@zoned",
		password: "P@ssword",
		level: "Admin",
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
			username: "pizza",
			name: "myuwi",
			email: "noob@zonednetwork.com",
			password: "I-like-small-mushrooms",
			level: "noob",
		}),

		new User({
			username: "zero",
			name: "Jay",
			email: "Jay@zonednetwork.com",
			password: "123",
			level: "Admin",
		}),

		new User({
			username: "clot",
			name: "blut im Venen",
			email: "Venen@zonednetwork.com",
			password: "Schisse",
			level: "schisse",
		}),
	];
	await User.insertMany(randoms);
});

usersController.get("/", async (req, res) => {
	const users = await User.find();
	res.json(users);
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
		username: req.body.username,
		name: req.body.name,
		Email: req.body.Email,
		Password: req.body.Password,
		Level: req.body.Level,
	});
	createUser.save();
	return res.json({
		message: "Successfully Created " + req.body.username,
	});
});

usersController.delete("/delete/:username", async (req, res) => {
	try {
		const user = await User.findOneAndDelete({
			username: req.params.username,
		});
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		res.status(200).json({ message: "User deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
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
