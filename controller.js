const User = require("./userModal");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const { username } = req.body;
    const validUser = await User.findOne({ username });
    if (!validUser) {
      const result = await User.create({ ...req.body });
      res.json({ message: "Registered successfully" });
    } else {
      return res.status(500).send("User Already Exists");
    }
  } catch (e) {
    console.log(e);
  }
};

const getUser = async (req, res) => {
  try {
    const { username } = req.body;
    const validUser = await User.findOne({ username });
    if (validUser) {
      const data = validUser._id;
      const token = await jwt.sign({ userId: data }, "abcd1234");
      res.cookie("token", token).status(200).send("token");
    } else {
      return res.status(500).send("invalid user");
    }
  } catch (e) {
    console.log(e);
  }
};

// const putUser = async (req, res) => {
//   res.send("i am puttr");
// };

// const deleteUser = async (req, res) => {
//   res.send("i am deletetr");
// };

module.exports = {
  createUser,
  getUser,
  //   putUser,
  //   deleteUser,
};
