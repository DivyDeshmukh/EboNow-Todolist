import { useEffect, useState } from "react";
import "./App.css";
import api from "./api/api";
import { useForm } from "react-hook-form";
import Input from "./components/Input";
import Loading from "./components/Loading";

function App() {
  const [todos, setTodos] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  const fetchAllTodos = async () => {
    try {
      const response = await api.get("/todos/getAllTodos");
      if (response) {
        setTodos(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = async (data) => {
    try {
      const response = await api.post(`/todos/create`, data);
      if (response) {
        reset();
        fetchAllTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      const response = await api.delete(`/todos/delete/${todoId}`);
      if (response) {
        fetchAllTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllTodos();
  }, []);

  if (!todos) {
    return <Loading />;
  }

  return (
    <div className="h-screen w-screen bg-[#dde] flex justify-center items-center font-mono">
      <div
        id="card"
        className="w-[60%] p-4 flex flex-col items-center bg-[#eff] rounded-lg"
      >
        <div
          id="top"
          className="border-b-[1px] border-slate-400 font-bold text-black text-2xl pb-2 mb-2 w-full text-center"
        >
          <p>
            You have {todos?.totalTodos}{" "}
            {todos?.totalTodos > 1 ? "Todos" : "Todo"}
          </p>
        </div>
        <div
          id="middle"
          className="flex flex-col gap-2 w-full justify-center items-center text-red-600 font-bold text-xl mt-2"
        >
          {todos?.todos?.map((todo, index) => (
            <div
              key={index}
              className="flex justify-between w-full items-center border-b-[1px] pb-2 border-slate-500 px-4"
            >
              <h1>{todo.content}</h1>
              <button
                className="bg-[#eee] p-1 px-2 rounded-lg"
                onClick={() => deleteTodo(todo._id)}
              >
                x
              </button>
            </div>
          ))}
        </div>
        <div id="bottom" className="mb-2">
          <form
            onSubmit={handleSubmit(addTodo)}
            className="flex w-full justify-between gap-12 pt-4"
          >
            <Input
              type="text"
              placeholder="Enter Item"
              {...register("content", {
                required: true,
              })}
            />
            <button
              type="submit"
              className="bg-[#eee] p-2 px-4 rounded-xl font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
