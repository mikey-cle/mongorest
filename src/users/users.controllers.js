const User = require("./users.model");

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(200).send({ user: savedUser, message: "User created!" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.findUser = async (req, res) => {
  try {
    const username = req.params.username;
    const targetUser = await User.findOne({ username: username });
    res.status(200).send({ title: targetUser });
  } catch (error) {
    res.status(500).send(error);
  }
  exports.deleteUser = async (req, res) => {
    try {
      const user = req.params.username;
      const userToDelete = await User.findOneAndDelete({ username: user });
      res.status(200).send({ username: userToDelete });
    } catch (error) {
      res.status(200).send(error);
    }
  }
}
