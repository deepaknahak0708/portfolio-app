const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    message: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);

const user = mongoose.model("user", userSchema);

module.exports = user;
