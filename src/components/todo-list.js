import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({todos}) => {
  const points = todos.map(point => {
    return (
      <li>
        <TodoListItem
          label={point.label}
          important={point.important}
        />
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
