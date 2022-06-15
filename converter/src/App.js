import "./App.css";

import InputTime from "./components/InputTime";
import TextWriter from "./components/TextWriter";
import Todo from "./components/Todo";

function App() {
  return (
    <div className='App'>
      <InputTime />
      <TextWriter />
      <Todo />
    </div>
  );
}

export default App;
