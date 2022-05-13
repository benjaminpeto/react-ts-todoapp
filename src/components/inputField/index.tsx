import React, { useRef } from 'react';
import { GrSend } from 'react-icons/gr'
import './style.css';

interface InputProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; //What the heck, at least VSCode helps to figure out what types I need
  handleAddTodo: (e: React.FormEvent) => void;
}

export const InputField = ({
  todo,
  setTodo,
  handleAddTodo }: InputProps) => {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' onSubmit={(e) => {
      handleAddTodo(e);
      inputRef.current?.blur(); // blur focus on submitting with enter key
    }}>
      <input
        ref={inputRef}
        type="input"
        placeholder='Write your tasks here...'
        className='input-field'
        value={todo}
        onChange={(event) => setTodo(event.target.value)}>
      </input>
      <button className='input-btn' type="submit"><GrSend className='send' /></button>
    </form>
  )
};
