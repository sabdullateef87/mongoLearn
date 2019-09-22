const mongoose = require("mongoose");
const Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
    minlength: 2
  },
  completed: { type: Boolean },
  completedAt: { type: Number }
});
module.exports = { Todo };
