import { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddHandler: (arg: string) => void }> = (props) => {
  const todoInput = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoInput.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddHandler(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input ref={todoInput} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
