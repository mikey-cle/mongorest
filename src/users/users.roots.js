const { Router } = require("express");
const userRouter = Router();
const {
  createUser,
  updateUser,
  findUser,
  deleteUser,
} = require("./users.controllers");
userRouter.post("/users", createUser);
userRouter.get("/users/:username", findUser);
userRouter.put("/users/:username", updateUser);
userRouter.delete("/users/:username", deleteUser);

module.exports = userRouter;
