import React, { useState } from 'react';
import './App.css';

import { InputField } from './components/inputField/InputField';
import { Todo } from './model';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]); // All of the todos

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <h1 className="heading">To Do App</h1>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
