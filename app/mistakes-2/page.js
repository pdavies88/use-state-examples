'use client';
// Directly Modifying State
import { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]);

//   const addItem = () => {
//     items.push('New Item'); // Directly modifying state
//     setItems(items);
//   };

  const addItem = () => {
    setItems([...items, 'New Item']); // Correctly updating state
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
