import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = () => {
  return (
    <ul>
      <li>
        <TodoListItem label='create react app'/>
      </li>
      <li>
        <TodoListItem
          label='learn react'
          important />
      </li>
      <li>
        <TodoListItem label='do something else'/>
      </li>
    </ul>
  );
};

export default TodoList;
