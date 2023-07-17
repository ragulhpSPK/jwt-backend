const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./route");
const nameRoute = require("./nameRoute");
var cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Authorization"],
  })
);

app.use("/api/user", userRoute);
app.use("/api/name", nameRoute);
console.log(process.env.MONGO_URL);

mongoose
  .connect(
    "mongodb+srv://ragulhp27:ragulhp2704@cluster0.hjbngoz.mongodb.net/jwt?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(8080, () => {
      console.log("server listening on port 8080");
    });
  })
  .catch((err) => {
    console.log(err);
  });
