import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import ProvideTodos from "./store/todos-context";

function App() {
  return (
    <ProvideTodos>
      <div className="App">
        <NewTodo />
        <Todos />
      </div>
    </ProvideTodos>
  );
}

export default App;
