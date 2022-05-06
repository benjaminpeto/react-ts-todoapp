import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import './App.css';

import { InputField } from './components/inputField/InputField';
import  TodoList from './components/TodoList';
import { Todo } from './types/todo';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]); 
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };

  const onDragEnd = (result: DropResult) => {
    //console.log(result);
    const { source, destination } = result;

    if(!destination) return;
    if(destination.droppableId === source.droppableId &&
      destination.index === source.index) return;

    let add;
    let active = todos;
    let complete = completedTodos;

    if(source.droppableId === 'droppable-0') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if(destination.droppableId === 'droppable-0') {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <h1 className="heading">To Do App</h1>
        <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
          />
      </div>
    </DragDropContext>
  );
}

export default App;
