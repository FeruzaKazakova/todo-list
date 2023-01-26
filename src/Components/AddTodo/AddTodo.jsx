import React, {useContext, useState} from "react";
import styled from "styled-components";
import { TodoContext } from "../store/TodoContext";

export const AddTodo = () => {
  const [text, setText] = useState("");
  const {dispatch} = useContext(TodoContext)

  const addTodo = (e) => {
    e.preventDefault();
    dispatch({type: "ADD", text: text})
    setText("")
  }
  return (
    <Form>
      <StyledInput placeholder="Type here something..." value={text} onChange={event => setText(event.target.value)} />
      <AddButton onClick={addTodo}>Add</AddButton>
    </Form>
  );
}


const StyledInput = styled.input`
    width: 27rem;
    height: 2.5rem;
    border-radius: 1rem;
    border-width: 8px;
	border-image: repeating-linear-gradient(45deg, turquoise, pink 4%) 1;
    outline: none;
    margin-right: 1rem;
    &::placeholder{
        font-size: 1rem;
        padding-left: 10px;
    }
`
const Form = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 6rem;
`
const AddButton = styled.button`
    margin-left: 1rem;
    width: 100px;
    height: 60px;
    border: none;
    outline: none;
    color: #fff;
    background: #f66f6f;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 20px;
    font-size: 1.1rem;

&:before {
    content: '';
    background: linear-gradient(45deg, turquoise, #f16b81);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 200%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}
&:active {
    color: #f03180
}

&:active:after {
    background: transparent;
}

&:before {
    opacity: 1;
}

&:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fb95b7;
    left: 0;
    top: 0;
    border-radius: 20px;
}
@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
`