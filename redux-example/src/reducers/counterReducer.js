import { createSlice } from "@reduxjs/toolkit";
//import Counter from "../components/Counter";

const initState = {
  count: 0,
};

const counterSlice = createSlice({
  //name, initialState, reducers 세 가지는 필수!
  name: "counter",
  initialState: initState,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
    incrementByNum: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByNum } = counterSlice.actions;
export default counterSlice.reducer;

// const counterReducer = (state = initState, action) => {
//   switch(action.type){
//     case "INCREMENT":
//       return{
//         ...state,
//         count: state.count + 1
//       }
//     default:
//       return state;
//   }
// }

// export default counterReducer;
