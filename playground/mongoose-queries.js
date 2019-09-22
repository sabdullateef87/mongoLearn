const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todos");
const id = "5d87c2256f4ba91934e8227b";
const { User } = require("./../server/models/users");
// Todo.find({
//   _id: id
// })
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

User.findById(id)
  .then(user => {
    if (!user) {
      return console.log("User not found");
    }
    console.log(JSON.stringify(user, null, 2));
  })
  .catch(err => console.log(err));
