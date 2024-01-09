const express = require("express");
const mongoose = require("mongoose");
const {
  getUsers,
  getUserById,
  deleteUserById,
  addUser,
  updateUser,
} = require("../controllers/user_controller");

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUserById);
router.post("/users/", addUser);
router.patch("/users/:id", updateUser);

module.exports = router;
