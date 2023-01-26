import React, { createContext, useReducer } from 'react';
import { initialState, reducer } from '../TodoForm/TodoForm';

export const TodoContext = createContext({});

const TodoContextProvider = ({children}) => {
    const [state2, dispatch] = useReducer(reducer,initialState)
    const editTodo = (text,id) => {
       dispatch({type: "EDIT", id: id, text: text})
    }
    const values = {
        state2,
        dispatch,
        editTodo
      };

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContextProvider;