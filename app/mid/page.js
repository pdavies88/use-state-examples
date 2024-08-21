'use client';

import { useState } from 'react';

function TodoList() {
  // State to hold the list of items
  const [items, setItems] = useState([]);
  // State to hold the current input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle adding a new item
  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue(''); // Clear the input field
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
