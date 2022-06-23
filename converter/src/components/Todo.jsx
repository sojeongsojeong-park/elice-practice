import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

const Container = styled.div`
  width: 300px;
  padding: 24px;
`;

const InputArea = styled.div`
  $inputAlign: middle;

  display: flex;

  input {
    flex-grow: 1;
    padding: 4px;
    margin-right: 8px;
    border-radius: 4px;
    border: 1px solid #b2b2b2;
    vertical-align: $inputAlign;
  }

  button {
    padding: 4px 12px;
    color: white;
    background-color: #1b9f45;
    border-radius: 4px;
    border: none;
    vertical-align: $inputAlign;
  }
`;

const Message = styled.div`
  font-size: 1.1rem;
`;

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleAddClick = () => {
    if (text) {
      const id =
        todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1;
      const newTodo = {
        id: id,
        isFinish: false,
        content: text,
      };
      setTodoList([...todoList, newTodo]);
      setText("");
    }
  };

  useEffect(() => {
    let isAllFinish = true;
    todoList.forEach((todo) => {
      if (!todo.isFinish) {
        isAllFinish = false;
      }
    });

    if (todoList.length === 0) {
      setMessage("할 일을 추가해주세요.");
    } else if (isAllFinish) {
      setMessage("모든 할 일을 마쳤습니다!");
    } else {
      setMessage("아직 할 일이 남았습니다.");
    }
  }, [todoList]);

  return (
    <Container>
      <InputArea>
        <input value={text} onChange={handleTextChange} />
        <button onClick={handleAddClick}>추가</button>
      </InputArea>
      <div>
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
      <hr />
      <Message>{message}</Message>
    </Container>
  );
};

export default Todo;
