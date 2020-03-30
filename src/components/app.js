import React from "react";
import AppHeader from "./app-header";
import SearchPanel from "./search-panel";
import TodoList from "./todo-list";
import Today from "./today";
import ItemStatusFilter from "./item-status-filter";
import "./app.css";

const todoData = [
  { label: "do something", important: false, id: 1 },
  { label: "redo something", important: false, id: 2 },
  { label: "make it better", important: false, id: 3 },
  { label: "learn react", important: true, id: 4 },
  { label: "remake all", important: false, id: 5 }
];

const App = () => {
  const login = <span>Log in please</span>;
  const greeting = <span>welcome back</span>;
  const isLoggedIn = true;

  return (
    <div className="todo-app">
      <Today />
      <AppHeader toDo="1" done="2" />
      <div className='top-panel d-flex'>
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
      {isLoggedIn ? greeting : login}
    </div>
  );
};

export default App;
