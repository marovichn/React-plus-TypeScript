import { useRef } from "react";

const NewTodo: React.FC = () => {
  const todoRef = useRef();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input ref={todoRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
