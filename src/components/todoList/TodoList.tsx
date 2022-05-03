import React from 'react'
import { Todo } from '../../model';
import SingleTodo from '../singleTodo/SingleTodo';
import './TodoList.style.css';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="container">
      <div className='todos-pending'>
        <span className="todos-heading">
          Tasks pending
        </span>
        {
          todos.map((todo) => (
            <SingleTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))
        }
      </div>
      <div className='todos-pending done'>
        <span className="todos-heading">
          Completed tasks
        </span>
        {
          todos.map((todo) => (
            <SingleTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))
        }
      </div>
    </div>
  )
}

export default TodoList;