import React from 'react';
import './TodosLoading.css';

function TodosLoading({ message }) {
  return (
    <div className='LoadingTodo-container'>
        <span className='LoadingTodo-completeIcon'></span>
        <p className='LoadingTodo-text'>{message}</p>
        <span className='LoadingTodo-deleteIcon'></span>
    </div>
  );
}

export { TodosLoading };
