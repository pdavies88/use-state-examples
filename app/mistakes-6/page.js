'use client';
// Forgetting to Handle State Cleanup in useEffect
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Missing cleanup function
	return () => clearInterval(interval); // Cleanup function to clear the interval
  }, []);

  return (
    <div>
      <p>Seconds: {seconds}</p>
    </div>
  );
}

export default Timer;
