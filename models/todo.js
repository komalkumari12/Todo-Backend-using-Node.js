const mongoose = require("mongoose");

const Todo = mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  Description: {
    type: String,
    require: true,
  },
});

const TodoList = mongoose.model("Todolist", Todo);

model.exports = TodoList;
