import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({todos}) => {
  const points = todos.map(point => {
    return (
      <li>
        <TodoListItem {...point} />
      </li>
    )
  })

  return (
    <ul>
      {points}
    </ul>
  );
};

export default TodoList;
