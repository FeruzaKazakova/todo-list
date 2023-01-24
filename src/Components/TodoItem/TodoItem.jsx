import React, {useReducer, useState} from "react";
import styled from "styled-components";

export const TodoItem = ({ todo, remove, edit }) => {
  const [state, setState] = useState("list");
  const [text, setText] = useState(todo.text);
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <List>
    <Container>
      {state === "list"
        ? <>
        <Cont>
        <StyledInput type={'checkbox'} value={checked} onChange={toggle}/>
          <StyledTitle style={{ textDecoration: checked ? "line-through" : "" }}>{todo.text}</StyledTitle>
          </Cont>
          <Buttons>
          <EditButton onClick={() => setState("EDIT")}>Edit</EditButton>  
          <DeleteButton onClick={remove}>Delete</DeleteButton>
          </Buttons>
        </>
        : <>
          <EditInput value={text} onChange={event => setText(event.target.value)} />
          <EditButtons>
          <EditButton onClick={() => {edit(text); setState("list");}}>Save</EditButton>
          <EditButton onClick={() => setState("list")}>Cancel</EditButton>
          </EditButtons>
        </>}
    </Container>
    </List>
  );
}

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const EditButtons = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
`

const EditInput = styled.input`
    height: 2rem;
    margin-top: 0.3rem;
    margin-left: 1rem;
    border: 2px solid #e97dc9;
    border-radius: 10px;
    width: 24rem;
`

const EditButton = styled.button`
    background: #fb95b7;
    color: white;
    border-radius: 1rem;
    padding: 10px;
    border: #fb95b7;
    margin-right: 10px;
    font-size: 0.9rem;
    cursor: pointer;
`
const DeleteButton = styled.button`
    cursor: pointer;
    font-size: 0.9rem;
    background: #fb95b7;
    color: white;
    border-radius: 1rem;
    padding: 10px;
    border: #fb95b7;
    margin-right: 1rem;
`
const StyledTitle = styled.span`
    text-align: center;
    margin-left: 1rem;
    font-weight: 600;
    margin-top: 12px;
`
const StyledInput = styled.input`
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  margin-left: 10px;
`
const Container = styled.li`
    display: flex;
    justify-content: space-between;
    border: 2px solid #1be9c7;
    border-radius: 10px;
    height: 3rem;
    margin-top: 1.5rem;
    background-color: #f7f2cd;
    width: 36.5rem;
`
const Cont = styled.div`
    display: flex;
`
const Buttons = styled.div`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
`