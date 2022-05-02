import React from 'react'
import { Todo } from '../../model';
import './TodoList.style.css';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC = ({ todos, setTodos }: Props) => {
  return <div className="todos">
    {

    }
  </div>;
}

export default TodoList;