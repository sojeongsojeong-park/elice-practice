import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList((current) => {
      return [
        ...current,
        {
          id: new Date().getTime(),
          isCompleted: false,
          value: inputValue,
        },
      ];
    });

    setInputValue("");
  };

  const handleCompleteClick = (index) => {
    setTodoList((current) => {
      const newList = [...current];
      newList[index].isCompleted = true;
      return newList;
    });
  };
  const handleRemoveClick = (index) => {
    setTodoList((current) => {
      const newList = [...current];
      newList.splice(index, 1);
      return newList;
    });
  };

  return (
    <div>
      <ol id='todo-list'>
        {todoList.map((item, index) => (
          <li className={item.iscompleted === true ? "completed" : ""}>
            <span>{item.value}</span>
            <button onClick={() => handleCompleteClick(index)}>완료</button>
            <button onClick={() => handleRemoveClick(index)}>삭제</button>
          </li>
        ))}
      </ol>
      <form id='create' onSubmit={handleSubmit}>
        <input
          type='text'
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button type='submit'>등록</button>
      </form>
    </div>
  );
}

export default App;
