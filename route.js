const express = require("express");
const app = express();
const { createUser, deleteUser, getUser, putUser } = require("./controller");
const authenticateToken = require("./middleware");

const router = express.Router();

router.post("/register", createUser).post("/login", getUser);
router.get("/me", authenticateToken, (req, res) => {
  // Handle the request and send a response
  // For example, send back the user data
  res.send(req.userId); // Assuming the user data is stored in req.user
});

module.exports = router;
