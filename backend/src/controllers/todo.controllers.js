import { isValidObjectId } from "mongoose";
import { Todo } from "../models/todo.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const createTodo = asyncHandler(async (req, res) => {
  const { content } = req.body;
  if ([content].some((field) => field.trim() === "")) {
    throw Error(400, "Invalid Todo data sent");
  }

  const todo = await Todo.create({
    content,
  });

  const createdTodo = await Todo.findById(todo._id);

  if (!createdTodo) {
    throw new ApiError(500, "Something went wrong while creating todo");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, createdTodo, "Created Todo Successfully"));
});

const deleteTodo = asyncHandler(async (req, res) => {
  const { todoid } = req.params;

  if (!isValidObjectId(todoid)) {
    throw new ApiError(400, "Invalid todo id");
  }

  const removed = await Todo.findByIdAndDelete(todoid);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "deleted todo successfully"));
});

const getAllTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find();

  console.log(todos);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { todos, totalTodos: todos.length },
        "Todos Fetched Successfully"
      )
    );
});

export { createTodo, deleteTodo, getAllTodos };
