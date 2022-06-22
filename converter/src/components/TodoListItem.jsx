import React from "react";
import styled from "styled-components";

const deleteBtn = styled.button`
  visibility: hidden;
`;

const Container = styled.li`
  padding: 4px 0;

  &:hover {
    ${deleteBtn} {
      visibility: visible;
    }
  }
`;

const Check = styled.input`
  width: 20px;
  height: 20px;
  vertical-align: middle;
`;

const Label = styled.span`
  padding: 0 15px;
  vertical-align: middle;
  color: ${(props) => (props.checked ? "#b2b2b2" : "inherit")};
`;

const TodoListItem = (props) => {
  const { todo, handleCheck, handleDelete } = props;
  const [checked, setChecked] = React.useState(false);

  return (
    <Container>
      <Check
        type='checkbox'
        onChange={(event) => {
          setChecked(event.target.checked);
          handleCheck(event.target.checked, todo.id);
        }}
      />
      <Label checked={checked}>{todo.content}</Label>
      <deleteBtn
        onClick={() => {
          handleDelete(todo.id);
        }}
      >
        ❌
      </deleteBtn>
    </Container>
  );
};

export default TodoListItem;
