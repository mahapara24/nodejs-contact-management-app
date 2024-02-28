const asyncHandler = require("express-async-handler");

//registeration of user
// route post /api/users/register
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register the user" });
});

//login of user
// route post /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login the user" });
});

//current user
// route POSt /api/users/current
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
