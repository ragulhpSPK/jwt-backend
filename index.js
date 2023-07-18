const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./route");
const nameRoute = require("./nameRoute");
var cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);

app.use("/api/user", userRoute);
app.use("/api/name", nameRoute);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(8080, () => {
      console.log("server listening on port 8080");
    });
  })
  .catch((err) => {
    console.log(err);
  });
