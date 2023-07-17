const express = require("express");
const app = express();
const {
  createName,
  getName,
  updateName,
  deleteName,
} = require("./nameController");

const router = express.Router();

router.post("/", createName).get("/", getName);
router.put("/:id", createName).delete("/:id", getName);

module.exports = router;
