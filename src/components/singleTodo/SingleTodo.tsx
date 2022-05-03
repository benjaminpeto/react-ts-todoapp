import React, { useRef, useState, useEffect } from 'react'
import { Todo } from '../../model';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './SingleTodo.style.css';
import { Draggable } from 'react-beautiful-dnd';

type Props = {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
};

const SingleTodo = ({ index, todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => 
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    ));
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id ));
  };

  const handleEdit = (event: React.FormEvent, id: number) => {
    event.preventDefault();

    setTodos(todos.map((todo) => (
      todo.id === id ? {...todo, todo: editTodo} : todo
    )));
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  // enable focus on, to be able to write in the input immediately
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {
        (provided, snapshot) => (
          <form
            className={`single-todo ${snapshot.isDragging ? "drag" : ""}`}
            onSubmit={(event) => handleEdit(event, todo.id)}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {
              edit ? (
                <input
                  ref={inputRef}
                  value={editTodo}
                  onChange={(event) => setEditTodo(event.target.value)}
                  className='single-todo-text'
                />
              ) : todo.isDone ? (
                <s className='single-todo-text'>
                  {todo.todo}
                </s>
              ) : (
                <span className='single-todo-text'>
                  {todo.todo}
                </span>
              )
            }
            <div className='icons-container'>
              <span
                className='icons icon-edit'
                onClick={() => {
                  if(!edit && !todo.isDone) {
                    setEdit(!edit)
                  }
                }}
              >
                <AiFillEdit />
              </span>
              <span className='icons icon-delete' onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
              <span className='icons icon-done' onClick={() => handleDone(todo.id)}><MdDone /></span>
            </div>
          </form>
        )
      }
    </Draggable>
  )
}

export default SingleTodo