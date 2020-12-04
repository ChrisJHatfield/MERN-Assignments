import React from 'react';
import './App.css';
import HeaderTag from './components/HeaderTag';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <HeaderTag />
      <TodoList />
    </div>
  );
}

export default App;
