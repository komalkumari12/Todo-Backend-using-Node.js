const TodoController = require("../controller/todo");
const express = require("express");
const router = express.Router();

router.post("/addTodo", TodoController.addTodo);
router.delete("/removeTodoById/:id", TodoController.removeTodoById);
router.put("/updateTodoByID/:id", TodoController.updateTodoByID);
router.get("/getAllTodos", TodoController.getAllTodos);
// router.get("/getTodoById/:id", TodoController.getTodoById);

module.exports = router;
