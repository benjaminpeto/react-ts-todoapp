import { useState, createContext, useContext } from "react";

import { TodoType, TodoContextType, TodoProviderType } from '../types/todo';

const TodoContext = createContext({} as TodoContextType);

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }: TodoProviderType) => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<TodoType[]>([]); 
  const [completedTodos, setCompletedTodos] = useState<TodoType[]>([]);

  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        todos,
        setTodos,
        completedTodos,
        setCompletedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

