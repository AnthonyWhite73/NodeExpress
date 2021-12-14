const { Router } = require("express");
const { addUser, listUsers, updateUser, deleteUser } = require("./userControllers");
const { hashPassword } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword,addUser);
userRouter.get("/user", listUsers);
userRouter.put("/user", updateUser);
userRouter.delete("/user", deleteUser);

module.exports = userRouter;
