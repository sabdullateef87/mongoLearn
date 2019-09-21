//global imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//custom imports
const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todos");
const { User } = require("./models/users");

//use bodyparser
app.use(bodyParser.json());

//route
app.post("/todos", (req, res) => {
  const newTodo = new Todo({
    text: req.body.text
  });
  newTodo
    .save()
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

//configuring the port
app.listen(3000, () => {
  console.log("Connected to server");
});
