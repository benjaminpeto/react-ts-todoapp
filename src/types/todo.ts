import React from "react";
import { DropResult } from "react-beautiful-dnd";

export type TodoType = {
  id: number;
  todo: string;
  isDone: boolean;
};

export type TodoContextType = {
  todos: TodoType[] | [];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  completedTodos: TodoType[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  addTodo: (newTodo: string) => void;
  onDragEnd: (result: DropResult) => void;
};

export type TodoProviderType = {
  children: React.ReactNode;
};
