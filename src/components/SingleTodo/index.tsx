import { useEffect, useRef } from "react";
import { MdDone } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import { HandleFunctionsProps, useHandleFunctions } from "../../hooks/useHandleFunctions";
import "./style.css";

const SingleTodo: React.FC<HandleFunctionsProps> = ({
  index,
  todo,
  todos,
  setTodos,
}: HandleFunctionsProps) => {
  const {
    setEditTodo,
    handleDone,
    handleDelete,
    handleEdit,
    editTodo,
    isEdit,
    setIsEdit
  } = useHandleFunctions({index, todo, todos, setTodos});

  const inputRef = useRef<HTMLInputElement>(null);

  // enable focus on, to be able to write in the input immediately
  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          className={`single-todo ${snapshot.isDragging ? "drag" : ""}`}
          onSubmit={(event) => handleEdit(event, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {isEdit ? (
            <input
              ref={inputRef}
              value={editTodo}
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
                if (!isEdit && !todo.isDone) {
                  setIsEdit(!isEdit);
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
  );
};

export default SingleTodo;
