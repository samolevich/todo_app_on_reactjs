import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import Today from "./components/today";
import ItemStatusFilter from './components/item-status-filter';

const todoData = [
  {label: 'do something', important: false, id: 1},
  {label: 'redo something', important: false, id: 2},
  {label: 'make it better', important: false, id: 3},
  {label: 'learn react', important: true, id: 4},
  {label: 'remake all', important: false, id: 5},
]

const App = () => {
  const login = <span>Log in please</span>;
  const greeting = <span>welcome back</span>;
  const isLoggedIn = true;

  return (
    <div>
      <Today />
      <AppHeader toDo='1' done='2'/>
      <SearchPanel />
      <ItemStatusFilter />
      <TodoList todos={todoData}/>
      {isLoggedIn ? greeting : login}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
