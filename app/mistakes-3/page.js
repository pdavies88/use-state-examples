'use client';
// Not Using Functional Updates When State Depends on Previous State
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

//   const incrementTwice = () => {
//     setCount(count + 1); // First increment
//     setCount(count + 1); // Second increment, but it doesn't work as expected
//   };

  const incrementTwice = () => {
    setCount(prevCount => prevCount + 1); // First increment
    setCount(prevCount => prevCount + 1); // Second increment, now it works as expected
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={incrementTwice}>Increment Twice</button>
    </div>
  );
}

export default Counter;
