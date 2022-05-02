import React, { useState } from 'react';
import './App.css';

import { InputField } from './components/inputField/InputField';

const App: React.FC = () => {

  const [todo, setTodo] = useState("");

  return (
    <div className="App">
      <h1 className="heading">To Do App</h1>
      <InputField />
    </div>
  );
}

export default App;
