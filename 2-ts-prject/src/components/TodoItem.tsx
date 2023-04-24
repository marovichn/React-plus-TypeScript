import React from "react";

const TodoItem: React.FC<{ key: string; text: string }> = (props) => {
  return <li>{props.text}</li>;
};
export default TodoItem;
