const Name = require("./nameModal");
const middleWare = require("./middleware");

const createName = async (req, res) => {
  try {
    await middleWare(req, res);
    req.body.userId = req.userId;

    const result = await Name.create({ ...req.body });
    res.status(200).send({ message: result });
  } catch (err) {
    console.log(err);
  }
};

const getName = async (req, res) => {
  try {
    await middleWare(req, res);

    const result = await Name.find({ userId: req.userId });
    res.status(200).send({ message: result });
  } catch (err) {
    console.log(err);
  }
};

const deleteName = async (req, res) => {
  res.send("i am deletetr");
};

const updateName = async (req, res) => {
  res.send("i am deletetr");
};

module.exports = {
  createName,
  getName,
  deleteName,
  updateName,
};
