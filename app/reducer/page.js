'use client';
// import { useState } from 'react';

// function MultiCounter() {
//   const [counters, setCounters] = useState({ counter1: 0, counter2: 0 });

//   const incrementCounter1 = () => {
//     setCounters(prevCounters => ({ ...prevCounters, counter1: prevCounters.counter1 + 1 }));
//   };

//   const incrementCounter2 = () => {
//     setCounters(prevCounters => ({ ...prevCounters, counter2: prevCounters.counter2 + 1 }));
//   };

//   return (
//     <div>
//       <p>Counter 1: {counters.counter1}</p>
//       <button onClick={incrementCounter1}>Increment Counter 1</button>
//       <p>Counter 2: {counters.counter2}</p>
//       <button onClick={incrementCounter2}>Increment Counter 2</button>
//     </div>
//   );
// }

// export default MultiCounter;


// useReducer
import { useReducer } from 'react';

const initialState = { counter1: 0, counter2: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment_counter1':
      return { ...state, counter1: state.counter1 + 1 };
    case 'increment_counter2':
      return { ...state, counter2: state.counter2 + 1 };
    default:
      return state;
  }
}

function MultiCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Counter 1: {state.counter1}</p>
      <button onClick={() => dispatch({ type: 'increment_counter1' })}>Increment Counter 1</button>
      <p>Counter 2: {state.counter2}</p>
      <button onClick={() => dispatch({ type: 'increment_counter2' })}>Increment Counter 2</button>
    </div>
  );
}

export default MultiCounter;
