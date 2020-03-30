import React from "react";
import TodoListItem from "./todo-list-item";
import './todo-list.css'

const TodoList = ({todos}) => {
  const points = todos.map(point => {
    return (
      <li key={point.id} className='list-group-item'>
        <TodoListItem {...point} />
      </li>
    )
  })

  return (
    <ul className='list-group todo-list'>
      {points}
    </ul>
  );
};

export default TodoList;
