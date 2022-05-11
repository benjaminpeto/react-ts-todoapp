import React, {
  useState,
  createContext,
  useContext,
} from "react";
import { Todo, TodoProviderType, TodoContextType } from "../types/todo";
import { DropResult } from "react-beautiful-dnd";

const TodoContext = createContext({} as TodoContextType);

export const useTodos = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }: TodoProviderType) => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(''); // needs to be fixed !
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };

  const handleEdit = (event: React.FormEvent, id: number) => {
    event.preventDefault();

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : todo
      )
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

  // DRAG COMPLETE
  const onDragEnd = (result: DropResult) => {
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
  // DRAG COMPLETE

  return (
    <TodoContext.Provider
      value={{
        isEdit,
        setIsEdit,
        editTodo,
        setEditTodo,
        todos,
        setTodos,
        todo,
        setTodo,
        completedTodos,
        setCompletedTodos,
        handleDone,
        handleDelete,
        handleEdit,
        handleAddTodo,
        onDragEnd,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

/* export default useTodos; */
