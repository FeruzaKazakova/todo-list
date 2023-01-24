import React, { useReducer } from "react";
import { AddTodo } from "../AddTodo/AddTodo.jsx";
import { TodoItem } from "../TodoItem/TodoItem.jsx";

const initialState = {
    counter: 2,
    todos: [{
      id: 1,
      text: "To finish homeworks",
    }],
  };
  
  const reducer = (state, action) => {
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
  const [state, dispatch] = useReducer(reducer, initialState);
  return (<>
    <AddTodo
      add={text => dispatch({type: "ADD", text: text})}
    />
    {state.todos.map(t => (
      <TodoItem
        key={t.id}
        todo={t}
        remove={() => dispatch({type: "DELETE", id: t.id})}
        edit={text => dispatch({type: "EDIT", id: t.id, text: text})}
      />
    ))}
  </>);
}