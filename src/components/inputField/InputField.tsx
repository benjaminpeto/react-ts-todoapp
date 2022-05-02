import React from 'react'
import './InputField.style.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; //What the heck, at least VSCode helps to figure out what types I need
  handleAddTodo: (e: React.FormEvent) => void;
}

export const InputField = ({ todo, setTodo,handleAddTodo }: Props) => {
  return (
    <form className='input' onSubmit={handleAddTodo}>
      <input
        type="input"
        placeholder='Write your tasks here...'
        className='input-field'
        value={todo}
        onChange={(event) => setTodo(event.target.value)}>
      </input>
      <button className='input-btn' type="submit">Enter</button>
    </form>
  )
};
