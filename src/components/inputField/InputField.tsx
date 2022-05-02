import React from 'react'
import './InputField.style.css';

export const InputField = () => {
  return (
    <form className='input'>
      <input type="input" placeholder='Write your tasks here...' className='input-field'></input>
      <button className='input-btn' type="submit">Enter</button>
    </form>
  )
};
