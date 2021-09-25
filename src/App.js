import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newItem) => {
    setTodoList([...todoList, newItem]);
  };
  const handleTodo = (item) => {
    const filteresItems = todoList.filter((items) => {
      return items !== item;
    });
    setTodoList(filteresItems);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo} />
        <TodoList todoList={todoList} handleTodo={handleTodo} />
      </header>
    </div>
  );
}

export default App;
