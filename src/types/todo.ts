export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

export type TodoProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; //(value: Todo[] ) => void;
};