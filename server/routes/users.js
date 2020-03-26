const express = require("express");
const {
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  getUsers
} = require("../controllers/User");

const router = express.Router();

//User
router.get("/", getUsers.validator, getUsers.controller);
router.post("/", createUser.validator, createUser.controller);
router.get("/:userId", getUserById.validator, getUserById.controller);
router.put("/:userId", updateUserById.validator, updateUserById.controller);
router.delete("/:userId", deleteUserById.validator, deleteUserById.controller);

module.exports = router;
