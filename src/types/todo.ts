import { DropResult } from "react-beautiful-dnd";
export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

export type TodoProviderType = {
  children: React.ReactNode;
};

export type TodoContextType = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  editTodo: string;
  setEditTodo: React.Dispatch<React.SetStateAction<string>>;
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  completedTodos: Todo[];
  setCompletedTodos:  React.Dispatch<React.SetStateAction<Todo[]>>;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  handleDone: (id: number) => void;
  handleDelete: (id: number) => void;
  handleEdit: (event: React.FormEvent, id: number) => void;
  handleAddTodo: (e: React.FormEvent) => void;
  onDragEnd: (result: DropResult) => void;
}