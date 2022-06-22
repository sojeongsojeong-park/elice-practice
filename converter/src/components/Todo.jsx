import React from "react";
import TodoList from "./TodoList";
import styled, { css } from "styled-components";

const borderRadiusWidth = css`
  border-radius: 5px;
`;
const Container = styled.div`
  padding: 24px;
`;
const AddInput = styled.input`
  width: 200px;
  height: 20px;
  border: 1px solid #b2b2b2;
  ${borderRadiusWidth};
  padding: 4px;
`;
const AddBtn = styled.button`
  margin-left: 12px;
  background-color: rgb(67, 175, 67);
  color: #fff;
  width: 80px;
  height: 30px;
  border: none;
  ${borderRadiusWidth}
  padding: 4px 12px;
`;

const Todo = () => {
  const [todoList, setTodoList] = React.useState([]);
  const [text, setText] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleAddClick = () => {
    const id = todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1;
    const newTodo = {
      id:id,
      isFinish: false,
      content: text,
    };
    //todoList 배열입니다.
    //setTodoList도 배열을 파라미터로 받음
    setTodoList([...todoList, newTodo]);
    setText("");
  };

  React.useEffect(() => {
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
      <div>
        <AddInput value={text} onChange={handleChange} />
        <AddBtn onClick={handleAddClick}>추가</AddBtn>
      </div>
      <TodoList todoList={todoList} />
      <div>{message}</div>
    </Container>
  );
};

export default Todo;
