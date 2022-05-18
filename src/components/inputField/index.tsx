import React, { useRef, useState } from "react";
import { GrSend } from "react-icons/gr";
import "./style.css";

interface InputProps {
  addTodo: (newTodo: string) => void;
}

export const InputField = ({ addTodo }: InputProps) => {
  const [newTodo, setNewTodo] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    if (value) setNewTodo(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo) {
      addTodo(newTodo);
      inputRef.current?.blur(); // blur focus on submitting with enter key
    }
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Write your tasks here..."
        className="input-field"
        value={newTodo}
        onChange={handleChange}
      />
      <button className="input-btn" type="submit">
        <GrSend className="send" />
      </button>
    </form>
  );
};
