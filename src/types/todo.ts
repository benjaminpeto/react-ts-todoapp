import React from "react";

export type TodoType = {
  id: number;
  todo: string;
  isDone: boolean;
};

export type TodoContextType = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todos: TodoType[] | [];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  completedTodos: TodoType[];
  setCompletedTodos:  React.Dispatch<React.SetStateAction<TodoType[]>>;
};

export type TodoProviderType = {
  children: React.ReactNode;
};