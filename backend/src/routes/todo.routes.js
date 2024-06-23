import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
} from "../controllers/todo.controllers.js";

const router = Router();

router.route("/create").post(createTodo);
router.route("/delete/:todoid").delete(deleteTodo);
router.route("/getAllTodos").get(getAllTodos);

export default router;
