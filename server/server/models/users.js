const mongoose = require("mongoose");
const User = mongoose.model("User", {
  firstname: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 20
  },
  age: {
    type: Number,
    required: true
  }
});

module.exports = { User };
