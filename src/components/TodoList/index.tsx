import React from 'react'

import './style.css';
import SingleTodo from '../SingleTodo';
import { TodoType } from '../../types/todo';
import { Droppable } from 'react-beautiful-dnd';

interface TodoListProps {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  completedTodos: TodoType[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
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