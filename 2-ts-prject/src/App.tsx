import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import ProvideTodos from "./store/todos-context";

function App() {
  return (
    <ProvideTodos>
      <NewTodo />
      <Todos />
    </ProvideTodos>
  );
}

export default App;
