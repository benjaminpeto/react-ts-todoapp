import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import { Todo, TodoProviderType, TodoContextType } from "../types/todo";

const TodoContext = createContext({} as TodoContextType);

export const useTodos = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }: TodoProviderType) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<Todo[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);

  /* const [todo, setTodo] = useState<string>('');

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if(todos) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  }; */

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
      todos.map((todo) =>
        todo.id === id ? { ...todo, /* todo: */ editTodo } : todo
      )
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
        edit,
        editTodo,
        setEdit,
        setEditTodo,
        inputRef,
        todos,
        setTodos,
        handleDone,
        handleDelete,
        handleEdit,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

/* export default useTodos; */
