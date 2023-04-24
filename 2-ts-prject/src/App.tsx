import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Learn"), new Todo("TypeScript")];

  return (
    <div className="App">
      <Todos items={todos}>
        <p>Hi</p>
      </Todos>
    </div>
  );
}

export default App;
