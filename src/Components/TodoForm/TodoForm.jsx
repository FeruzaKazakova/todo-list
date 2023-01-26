import React, { useContext, useReducer } from "react";
import { AddTodo } from "../AddTodo/AddTodo.jsx";
import { TodoContext } from "../store/TodoContext.js";
import { TodoItem } from "../TodoItem/TodoItem.jsx";

export const initialState = {
    counter: 2,
    todos: [{
      id: 1,
      text: "To finish homeworks",
    }],
  };
  
 export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        {
          const newCounter = state.counter + 1;
          const newTodo = {
            id: newCounter,
            text: action.text,
          };
          return {
            counter: newCounter,
            todos: [...state.todos, newTodo],
          };
        }
      case "EDIT":
        {
          const idx = state.todos.findIndex(t => t.id === action.id);
          const todo = Object.assign({}, state.todos[idx]);
          todo.text = action.text;
          const todos = Object.assign([], state.todos);
          todos.splice(idx, 1, todo);
          return {
            counter: state.counter,
            todos: todos,
          };
        }
      case "DELETE":
        {
          const idx = state.todos.findIndex(t => t.id === action.id);
          const todos = Object.assign([], state.todos);
          todos.splice(idx, 1);
          return {
            counter: state.counter,
            todos: todos,
          };
        }
      default:
        return state;
    }
  };

export const TodoForm = () => {
  const {state2} = useContext(TodoContext)

  return (<>
    <AddTodo/>

    {state2.todos.map(t => (
      <TodoItem key={t.id} todo={t}
      />
    ))}
  </>);
}