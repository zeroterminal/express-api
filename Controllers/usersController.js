import User from '../Models/usersModel.js';
import express from 'express';
const usersController = express.Router();

usersController.post('/createAdmin', (req, res) => {
  res.json('CREATED username ADMIN and password P@ssword')
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

usersController.delete('/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const deleteUser = await User.findOneAndDelete({ username: username })
  } catch (error) {
      res.json('Error' + error);
    }
  })

usersController.post('/create', (req, res) => {
    const createUser = new User({
      Username: req.body.Username,
      Name: req.body.Name,
      Email: req.body.Email,
      Password: req.body.Password,
      Level: req.body.Level
    })
    createUser.save();
    return res.json({"message": "Successfully Created " + req.body.Username})
    
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

