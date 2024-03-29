import React from "react";

export default function TodoCard({
  task,
  description,
  completed,
  id,
  markAsComplete,
  deleteTodo,
}) {
  return (
    <div className="flex items-center flex-col py-5 border-solid border-2 border-sky-500 w-full">
      <h2>{task}</h2>
      <p>{description}</p>
      <div className=" space-x-2">
        <button
          onClick={() => deleteTodo(id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2"
        >
          Delete
        </button>

        {completed == true ? (
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            Completed
          </button>
        ) : (
          <button
            onClick={() => markAsComplete(id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Mark as Complete
          </button>
        )}
      </div>
    </div>
  );
}
