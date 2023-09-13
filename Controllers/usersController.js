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
  const deleteUser = req.params.username
  const result = await User.findOneAndDelete(deleteUser);

  if (result) {
    res.send("Success")
  } else {
    res.send("failed");
  }
  res.send(deleteUser)

   
})


usersController.put('/edit/:username', async (req, res) => {

  try {
    const {id} = req.params;
    // const editUser = await User.
  } catch (error) {
    res.json({'message': error.message})
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