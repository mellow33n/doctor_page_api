const express = require("express");
const {
  getUsers,
  getUserById,
  deleteUserById,
  addUser,
  updateUser,
} = require("../controllers/user_controller");
const { getLogin } = require("../controllers/login_controller")

const router = express.Router();
// Users
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUserById);
router.post("/users/", addUser);
router.patch("/users/:id", updateUser);


//Login
router.post("/login", getLogin);


module.exports = router;
