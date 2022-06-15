import React from "react";

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
      id,
      isFinish: false,
      content: text,
    };
    //todoList 배열입니다.
    //setTodoList도 배열을 파라미터로 받음
    setTodoList([...todoList, newTodo]);
  };

  const handleDelete = (id) => {
    setTodoList(
      todoList.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const handleCheckChange = (event, id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          todo.isFinish = event.target.checked;
        }
        return todo;
      })
    );
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
    <div>
      <div>
        <input value={text} onChange={handleChange} />
        <button onClick={handleAddClick}>추가</button>
      </div>
      <ul>
        {todoList.map((todo) => (
          <li>
            <input
              type='checkbox'
              onChange={(event) => {
                handleCheckChange(event, todo.id);
              }}
            />
            <span>{todo.content}</span>
            <button
              onClick={() => {
                handleDelete(todo.id);
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
      <div>{message}</div>
    </div>
  );
};

export default Todo;
