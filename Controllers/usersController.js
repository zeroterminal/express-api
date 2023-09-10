import User from '../Models/usersModel.js';
import express from 'express';
const usersController = express.Router();

usersController.get('/createAdmin', (req, res) => {
  res.send('<pre>CREATED username ADMIN and password P@ssword</pre>')
  let admin = new User ({
      Username: "admin",
      Name: "admin",
      Email: "admin@zoned",
      Password: "P@ssword",
      Level: "Admin"
  });
  admin.save();
})


usersController.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
})

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

