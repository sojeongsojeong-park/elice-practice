import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByNum,
} from "../reducers/counterReducer";

const Counter = () => {
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  //store의 State를 꺼내오는 함수
  const counterState = useSelector((state) => {
    return state.counter;
  });
  const handleChangeNum = (event) => {
    setNum(Number(event.target.value));
  };
  return (
    <div>
      <h1>{counterState.count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        INCREMENT
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        DECREMENT
      </button>
      <div>
        <input type='number' value={num} onChange={handleChangeNum} />
        <button onClick={() => {dispatch(incrementByNum(num))}}>만큼 증가!</button>
      </div>
    </div>
  );
};

export default Counter;
