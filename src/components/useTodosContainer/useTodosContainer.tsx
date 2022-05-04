import React, { useRef, useState, useEffect } from "react";
import { Todo } from "../../model";

export type Props = {
	index: number;
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;     //(value: Todo[] ) => void;
};

const useTodosContainer = ({ index, todo, todos, setTodos}: Props) => {
	const [edit, setEdit] = useState<boolean>(false);
	const [editTodo, setEditTodo] = useState<string>(todo.todo);

	const handleDone = (id: number) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
			)
		);
	};

	const handleDelete = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleEdit = (event: React.FormEvent, id: number) => {
		event.preventDefault();

		setTodos(
			todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
		);
		setEdit(false);
	};

	const inputRef = useRef<HTMLInputElement>(null);

	// enable focus on, to be able to write in the input immediately
	useEffect(() => {
		inputRef.current?.focus();
	}, [edit]);

  return { setEditTodo, handleDone, handleDelete, handleEdit, inputRef, editTodo, edit, setEdit,  }
};

export default useTodosContainer;