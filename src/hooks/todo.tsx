import React, { useRef, useState, useEffect, createContext, useContext } from "react";
import { TodoProps, Todo } from "../types/todo";

const TodoContext = createContext({} as TodoProps);

export const useTodos = () => {
  return useContext(TodoContext);
}

/* const useTodos = ({ todo, todos, setTodos }: TodoProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo); */

export const TodoProvider = ({children}: Todo) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<Todo[]>([]);
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
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  // enable focus on, to be able to write in the input immediately
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <TodoContext.Provider
      value={{
        setEditTodo,
        handleDone,
        handleDelete,
        handleEdit,
        inputRef,
        editTodo,
        edit,
        setEdit,
        completedTodos,
        setCompletedTodos,
        handleAddTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

/* export default useTodos; */
