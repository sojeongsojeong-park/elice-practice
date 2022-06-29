import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  //store의 State를 꺼내오는 함수
  const counterState = useSelector((state) => {
    return state.counterReducer;
  });
  return (
    <div>
      <h1>{counterState.count}</h1>
      <button
        onClick={() => {
          dispatch({
            type: "INCREMENT",
          });
        }}
      >
        INCREMENT
      </button>
    </div>
  );
};

export default Counter;
