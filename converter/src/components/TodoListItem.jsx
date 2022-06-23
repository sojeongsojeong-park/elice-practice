import React from "react";
import styled, { css } from "styled-components";

const middleAlign = css`
  vertical-align: middle;
`;

const CheckArea = styled.span`
  input {
    ${middleAlign}
    width: 20px;
    height: 20px;
  }

  label {
    ${middleAlign}
    margin: 0 16px;
  }
`;

const DeleteBtn = styled.span`
  ${middleAlign}
  color: red;
  margin-left: 8px;
  cursor: pointer;
  visibility: hidden;
`;

const Item = styled.li`
  padding: 4px 0;

  &:hover {
    ${DeleteBtn} {
      visibility: visible;
    }
  }
`;

const TodoItem = (props) => {
  const { todo, checkFunc, handleDelete } = props;
  const [checked, setChecked] = React.useState(false);

  return (
    <Item key={todo.id} checked={checked}>
      <CheckArea>
        <input
          id={`check_${todo.id}`}
          type='checkbox'
          onChange={(event) => {
            setChecked(event.target.checked);
            checkFunc(event.target.checked, todo.id);
          }}
        />
        <label htmlFor={`check_${todo.id}`}>{todo.content}</label>
      </CheckArea>
      <DeleteBtn
        onClick={() => {
          handleDelete(todo.id);
        }}
      >
        X
      </DeleteBtn>
    </Item>
  );
};

export default TodoItem;
