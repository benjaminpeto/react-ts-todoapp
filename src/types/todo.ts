export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

export type TodoProviderType = {
  children: React.ReactNode;
};

export type TodoContextType = {
  // todo: string;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setEditTodo: any;
  inputRef: React.RefObject<HTMLInputElement>;
  edit: boolean;
  editTodo: string;
  setEdit: any;
  handleDone: (id: number) => void;
  handleDelete: (id: number) => void;
  handleEdit: (event: React.FormEvent, id: number) => void;
}