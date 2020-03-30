import React from "react";
import ReactDOM from "react-dom";

const TodoList = () => {
  const points = ["Learn React", "Build Perfect App"];
  return (
    <ul>
      <li>{points[0]}</li>
      <li>{points[1]}</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>To Do List</h1>;
};

const SearchPanel = () => {
  return <input placeholder="search" />;
};

const Today = () => {
  return (String(new Date()))
}

const App = () => {
  const login = <span>Login please</span>
  return (
    <div>
      <Today />
      <AppHeader />
      <SearchPanel />
      <TodoList />
      {login}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
