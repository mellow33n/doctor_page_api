const express = require("express");
const {
  getUsers,
  getUserById,
  deleteUserById,
  addUser,
  updateUser,
} = require("../controllers/user_controller");
const { getLogin } = require("../controllers/login_controller");
const {
  setSettings,
  getSettings,
} = require("../controllers/settings_controller");
const {
  getScheduleSlot,
  getScheduleSlotByID,
  deleteScheduleSlotByID,
  addScheduleSlot,
  updateScheduleSlot,
} = require("../controllers/scheduleSlot_controller");

const router = express.Router();
// Users
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUserById);
router.post("/users/", addUser);
router.patch("/users/:id", updateUser);

//Login
router.post("/login", getLogin);

// Settings
router.get("/settings", getSettings);
router.post("/settings", setSettings);

// Schedule slots
router.get("/slots", getScheduleSlot);
router.get("/slots/:id", getScheduleSlotByID);
router.delete("/slots/:id", deleteScheduleSlotByID);
router.post("/slots", addScheduleSlot);
router.patch("/slots/:id", updateScheduleSlot);
module.exports = router;
