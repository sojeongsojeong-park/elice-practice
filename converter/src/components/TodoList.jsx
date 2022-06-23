import React from "react";
import TodoItem from "./TodoListItem";
import styles from "../styles/TodoList.module.scss";

const TodoList = (props) => {
  const { todoList, setTodoList } = props;

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

  const handleDeleteClick = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <ul className={styles.list}>
      {todoList.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            checkFunc={handleCheckChange}
            handleDelete={handleDeleteClick}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
