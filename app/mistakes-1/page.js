'use client';
// Incorrect Initial State Type
import { useState } from 'react';

function Counter() {
//   const [count, setCount] = useState('0'); // Initial state should be a number, not a string
  const [count, setCount] = useState(0); // Correct initial state type
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
