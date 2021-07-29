const { Router } = require("express");
const userRouter = Router();
const {createUser,findUser,deleteUser, updateEmail, updatePass} = require("./users.controllers");
userRouter.post("/users", createUser);
userRouter.get("/users/:username", findUser);
userRouter.put("/users/:username/", updateEmail); 
userRouter.delete("/users/:username", deleteUser);
userRouter.put("users/updatePass", updatePass)

module.exports = userRouter;
