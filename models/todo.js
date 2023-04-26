const mongoose = require("mongoose");

const Todo = mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: false,
  },
  description: {
    type: String,
    require: true,
  },
});

const TodoList = mongoose.model("Todolist", Todo);

module.exports = TodoList;
