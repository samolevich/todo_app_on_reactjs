import React from "react";
import ReactDOM from "react-dom";

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Perfect App</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>To Do List</h1>;
};

const SearchPanel = () => {
  return <input placeholder="search" />;
};

const element = (
  <div>
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
