import React, { useRef, useState, useEffect } from "react";
import { Todo } from "../types/todo";

export type useTodoProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const useTodos = ({ todo, todos, setTodos }: useTodoProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

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

  const handleEdit = (event: React.FormEvent, id: number) => {
    event.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setIsEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  // enable focus on, to be able to write in the input immediately
  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);

  return {
    setEditTodo,
    handleDone,
    handleDelete,
    handleEdit,
    inputRef,
    editTodo,
    isEdit,
    setIsEdit,
  };
};

export default useTodos;
