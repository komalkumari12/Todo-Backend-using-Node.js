const TodoController = require("../controller/todo");
const express = require("express");
const router = express.Router();

router.post("/addTodo", TodoController.addTodo);
router.delete("/removeTodoById", TodoController.removeTodoById);
router.put("/updateTodoByID", TodoController.updateTodoByID);
router.get("/getAllTodos", TodoController.getAllTodos);
router.get("/getTodoById", TodoController.getTodoById);

module.exports = router;
