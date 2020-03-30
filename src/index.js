import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import Today from "./components/today";

const todoData = [
  {label: 'do something', important: false},
  {label: 'redo something', important: false},
  {label: 'make it better', important: false},
  {label: 'learn react', important: true},
  {label: 'remake all', important: false},
]

const App = () => {
  const login = <span>Log in please</span>;
  const greeting = <span>welcome back</span>;
  const isLoggedIn = true;

  return (
    <div>
      <Today />
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData}/>
      {isLoggedIn ? greeting : login}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
