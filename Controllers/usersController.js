import User from '../Models/usersModel.js';
import express from 'express';
const usersController = express.Router();

usersController.get('/createAdmin', (req, res) => {
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



usersController.delete('delete/:username', async (req, res) => {
  const deleteUsername = req.params.username;
  try {
    const deleteUser = await User.findOneAndDelete({username: deleteUsername});
    if(!deleteUser) {res.status(404).json({error: 'username was not found'});}
    res.json({message: 'Successfully Deleted : ' + deleteUsername});
  } 
  catch (err) {
    res.status(500).json({error: err.message});
  }
})

usersController.post('create/:username', async (req, res) => {
  const newUsername = req.params.username;
  const newName     = req.params.name;
  const newEmail    = req.params.email;
  const newPassword = req.params.password;
  const newLevel    = req.params.level;

  try {
    const createUser = new User({
      Username: newUsername,
      Name: newName,
      Email: newEmail,
      Password: newPassword,
      Level: newLevel
    })
    
    
    if(!createUser) {res.status(404).json({error: 'Creating User Failed'});}
    createUser.save();
    res.json({message: 'Successfully added : ' + newUsername});
  } 
  catch (err) {
    res.status(500).json({error: err.message});
  }
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

