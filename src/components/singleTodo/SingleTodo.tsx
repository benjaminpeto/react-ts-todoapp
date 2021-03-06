import useTodosContainer from '../useTodosContainer/useTodosContainer';
import { Draggable } from 'react-beautiful-dnd';
import type { Props } from '../useTodosContainer/useTodosContainer';
// Styling + Icons
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './SingleTodo.style.css';

const SingleTodo: React.FC<Props> = ({ index, todo, todos, setTodos }: Props) => {

  const { setEditTodo,
          handleDone,
          handleDelete,
          handleEdit,
          inputRef,
          editTodo,
          edit,
          setEdit } = useTodosContainer({index, todo, todos, setTodos});

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