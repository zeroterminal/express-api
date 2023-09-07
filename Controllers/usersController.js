import User from '../Models/usersModel.js';

class UsersController {
  static login = async (req, res) => {
    const { username, password, email } = req.body;

    try {
      const username = await User.findOne({ username });
      const password = await User.findOne({ password });

      if (email && password) {
        console.log("Email found", username, password);
      }
    } catch (error) {
      console.log(error);
      console.log("schbwshjcbecedj");
    }
  };
}
export default UsersController;