const mongoose = require("mongoose");

const nameSchema = mongoose.Schema({
  name: {
    type: String,
  },
  userId: {
    type: String,
  },
});

module.exports = mongoose.model("name", nameSchema);
