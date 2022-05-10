import { MdDone } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import "./style.css";
import { Todo } from "../../types/todo";
import { TodoProvider, useTodos } from "../../hooks/todo";

interface SingleTodoProps {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<SingleTodoProps> = ({
  index,
  todo,
}: SingleTodoProps) => {
  const {
    inputRef,
    edit,
    editTodo,
    setEdit,
    setEditTodo,
    handleEdit,
    handleDelete,
    handleDone
  } = useTodos();

  return (
    <TodoProvider>

    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          className={`single-todo ${snapshot.isDragging ? "drag" : ""}`}
          onSubmit={(event) => handleEdit(event, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit ? (
            <input
              ref={inputRef}
              value={editTodo.map(todo => todo.todo)}
              onChange={(event) => setEditTodo(event.target.value)}
              className="single-todo-text"
            />
          ) : todo.isDone ? (
            <s className="single-todo-text">{todo.todo}</s>
          ) : (
            <span className="single-todo-text">{todo.todo}</span>
          )}
          <div className="icons-container">
            <span
              className="icons icon-edit"
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <AiFillEdit />
            </span>
            <span
              className="icons icon-delete"
              onClick={() => handleDelete(todo.id)}
            >
              <AiFillDelete />
            </span>
            <span
              className="icons icon-done"
              onClick={() => handleDone(todo.id)}
            >
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
    </TodoProvider>
  );
};

export default SingleTodo;
