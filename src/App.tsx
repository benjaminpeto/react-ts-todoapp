import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";

import { InputField } from "./components/inputField";
import TodoList from "./components/TodoList";
import { useTodo } from "./context/useTodo";

const App: React.FC = () => {
  const {
    todos,
    setTodos,
    completedTodos,
    setCompletedTodos,
    addTodo,
    onDragEnd,
  } = useTodo();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <h1 className="heading">To Do App</h1>
        <InputField addTodo={addTodo} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
