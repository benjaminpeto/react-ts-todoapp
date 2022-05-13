import React, { useState } from "react";

import { TodoType } from "../types/todo";

export type HandleFunctionsProps = {
  index: number,
	todo: TodoType;
	todos: TodoType[];
	setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;     //(value: Todo[] ) => void;
};

export const useHandleFunctions = ({
  todo,
  todos,
  setTodos,
}: HandleFunctionsProps) => {
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEdit = (event: React.FormEvent, id: number) => {
    event.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setIsEdit(false);
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return {
    handleDone,
    handleDelete,
    handleEdit,
    editTodo,
    setEditTodo,
    isEdit,
    setIsEdit
  };
}