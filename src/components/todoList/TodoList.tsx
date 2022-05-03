import React from 'react'
import { Todo } from '../../model';
import SingleTodo from '../singleTodo/SingleTodo';
import './TodoList.style.css';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  return (
      <div className="container">
        <Droppable droppableId={'droppable-0'}>
          {
            (provided, snapshot) => (
              <div
                className={`todos-pending ${snapshot.isDraggingOver ? "dragactive" : ""}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <span className="todos-heading">
                  Tasks pending
                </span>
                {
                  todos?.map((todo, index) => (
                    <SingleTodo
                      index={index}
                      key={todo.id}
                      todo={todo}
                      todos={todos}
                      setTodos={setTodos}
                    />
                  ))
                }
                {provided.placeholder}
              </div>
            )
          }
        </Droppable>
        <Droppable droppableId={'droppable-1'}>
          {
            (provided, snapshot) => (
              <div
                className={`todos-pending done ${snapshot.isDraggingOver ? "dragcomplete" : ""}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <span className="todos-heading">
                  Completed tasks
                </span>
                {
                  completedTodos?.map((todo,index) => (
                    <SingleTodo
                      index={index}
                      key={todo.id}
                      todo={todo}
                      todos={completedTodos}
                      setTodos={setCompletedTodos}
                    />
                  ))
                }
                {provided.placeholder}
              </div>
            )
          }
        </Droppable>
      </div>
  )
}

export default TodoList;