import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export const Todos = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <>
      <div className=" p-4 text-xl font-semibold">Todos:</div>
      <div className="p-4 ">
      {todos.map((todo) => (
          <li key={todo.id} className=" bg-green-200 rounded-md p-2">
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))} className="mx-2 font-bold text-red-600 bg-red-200 rounded-lg p-2">X</button>
        </li>
      ))}
      </div>
    </>
  );
};
