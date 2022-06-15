import React from "react";
import DisplayTime from "./DisplayTime";

const InputTime = () => {
  const [seconds, setSeconds] = React.useState(3600);
  //re-render: props, state가 변경되었을 때

  return (
      <div>
        <DisplayTime seconds={seconds} setSeconds={setSeconds} scale='초' />
        <DisplayTime seconds={seconds} setSeconds={setSeconds} scale='분' />
        <DisplayTime seconds={seconds} setSeconds={setSeconds} scale='시간' />
      </div>
  );
};

export default InputTime;
