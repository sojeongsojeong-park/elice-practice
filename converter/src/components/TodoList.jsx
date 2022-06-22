import React from "react";
import TodoListItem from "./TodoListItem";
import styles from "styled-components";

const TodoList = (props) => {
  const { todoList, setTodoList } = props;

  const handleDelete = (id) => {
    setTodoList(
      todoList.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const handleCheckChange = (checked, id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          todo.isFinish = checked;
        }
        return todo;
      })
    );
  };
  return (
    <ul className={styles.todolist}>
      {todoList.map((todo) => (
        <TodoListItem
          todo={todo}
          handleCheck={handleCheckChange}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
