import { useEffect, useState } from "react";
import "./App.css";
import TodoCard from "./components/TodoCard";

function App() {
  const [todos, setTodos] = useState(null);

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    let a;
    if (localStorage.getItem("todos")) {
      a = JSON.parse(localStorage.getItem("todos"));
    } else {
      a = [];
    }
    setTodos(a);
  }, []);

  useEffect(() => {
    if (todos != null) localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    let todo = {
      task: task,
      description: description,
    };

    setTodos([...todos, todo]);
  }

  return (
    <>
      <div className="App">
        <div className="flex items-center flex-col py-2 border-solid border-2 border-sky-500">
          <h1 className="text-3xl">Todo App</h1>
          <br />
          <input
            onChange={(e) => setTask(e.currentTarget.value)}
            className="border-solid"
            type="text"
            placeholder="Enter Task here"
          />
          <br />

          <input
            onChange={(e) => setDescription(e.currentTarget.value)}
            type="text"
            placeholder="Enter Description"
          />
          <br />
          <button
            onClick={addTodo}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2"
          >
            Add Todo
          </button>
        </div>
        <div className="flex items-center flex-col py-2 pt-2 space-y-2">
          {todos &&
            todos.map((item) => (
              <TodoCard task={item.task} description={item.description} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
