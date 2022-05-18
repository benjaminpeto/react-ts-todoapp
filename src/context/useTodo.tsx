import { useState, createContext, useContext } from "react";

import { TodoType, TodoContextType, TodoProviderType } from "../types/todo";
import { DropResult } from "react-beautiful-dnd";

const TodoContext = createContext({} as TodoContextType);

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }: TodoProviderType) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [completedTodos, setCompletedTodos] = useState<TodoType[]>([]);

  const addTodo = (todoName: string) => {
    setTodos([
      ...todos,
      { id: Date.now(), todo: todoName, isDone: false },
    ]);
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add;
    let active = todos;
    let complete = completedTodos;

    if (source.droppableId === "droppable-0") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "droppable-0") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        completedTodos,
        setCompletedTodos,
        addTodo,
        onDragEnd,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
