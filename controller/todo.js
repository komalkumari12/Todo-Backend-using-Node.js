const TodoList = require("../models/todo");

exports.addTodo = async (req, res) => {
  try {
    const todoDetails = await TodoList.create(req.body);
    return res.status(200).json({
      message: todoDetails,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

exports.removeTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todoDetails = await TodoList.findByIdAndDelete(id);

    return res.status(200).json({
      message: todoDetails,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

exports.updateTodoByID = async (req, res) => {
  try {
    const { id } = req.params;
    const todoDetails = await TodoList.findByIdAndUpdate(id, req.body);

    return res.status(200).json({
      message: todoDetails,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const todoDetails = await TodoList.find({});
    return res.status(200).json({
      message: todoDetails,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

// exports.getTodoById = async (req, res) => {
//   try {
//     const todoDetails = await TodoList.findById();
//     return res.status(200).json({
//       message: todoDetails,
//     });
//   } catch (error) {
//     return res.status(404).json({
//       message: error.message,
//     });
//   }
// };
