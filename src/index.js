import React from 'react';
import ReactDOM from 'react-dom';

const element = (
  <div>
    <h1>To Do List</h1>
    <input placeholder='search'/>
    <ul>
      <li>Learn React</li>
      <li>Build Perfect App</li>
    </ul>
  </div>
)

ReactDOM.render(element, document.getElementById('root'));