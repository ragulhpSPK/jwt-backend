const jwt = require("jsonwebtoken");

const authenticateToken = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(500).send("no token provided");
  } else {
    jwt.verify(token, "abcd1234", (err, decoded) => {
      if (err) {
        res.status(500).send("Unauthorized: Invalid token");
      } else {
        req.userId = decoded.userId;
      }
    });
  }
};

module.exports = authenticateToken;
