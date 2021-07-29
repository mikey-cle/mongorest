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
    res.status(200).send({ username: targetUser });
    // console.log(targetUser)
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const user = req.params.username;
    const deleteUser = await User.findOneAndRemove({ username: user });
    res.status(200).send({
      username: deleteUser,
      message: `${user} has been removed from the database.`,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.updateEmail = async (req, res) => {
  try {
    const username = req.body.username;
    const newEmail = req.body.newEmail;
    await User.findOneAndUpdate({ username: username }, { email: newEmail });
    res.status(200).send({ username, newEmail });
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.updatePass = async (req, res) => {
  try {
    const username = req.body.username;
    const newPass = req.body.newPass;
    const changed = await User.findOneAndUpdate(
      { username: username },
      { password: newPass }
    );
    res.status(200).send({ username, newPass });
  } catch (error) {
    res.status(500).send(error);
  }
};
