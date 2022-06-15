import React from "react";

const TextWriter = () => {
  const [message, setMessage] = React.useState("");
  const [text, setText] = React.useState("");

  React.useEffect(() => {
   if(text){ 
     setMessage(`INPUT: ${text}`);
    }
  }, [text]);

  React.useEffect(() => {
    setMessage("모든 렌더링 완료!");
  }, []);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{message}</h1>
      <input value={text} onChange={handleChange} />
      <button>click me!</button>
    </div>
  );
};

export default TextWriter;
