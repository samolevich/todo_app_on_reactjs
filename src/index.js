import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import Today from "./components/today";

const App = () => {
  const login = <span>Log in please</span>;
  const greeting = <span>welcome back</span>;
  const isLoggedIn = true;

  return (
    <div>
      <Today />
      <AppHeader />
      <SearchPanel />
      <TodoList />
      {isLoggedIn ? greeting : login}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
