const express = require("express");
const app = express();
const { createUser, deleteUser, getUser, putUser } = require("./controller");
const authenticateToken = require("./middleware");

const router = express.Router();

router.post("/register", createUser).post("/login", getUser);
router.get("/me", authenticateToken);

module.exports = router;
