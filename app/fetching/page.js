'use client';

import { useState, useEffect } from 'react';

// NOTE: This is a contrived example to demonstrate useState.
// Use the `useQuery` hook from `react-query` for data fetching.
// Or use `swr` for data fetching with stale-while-revalidate strategy.

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos/1'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>User: {data.userId}</p>
      <p>Title: {data.title}</p>
    </div>
  );
}

export default DataFetcher;

// import useSWR from 'swr';

// // Fetcher function to be used with SWR
// const fetcher = (url) => fetch(url).then((res) => {
//   if (!res.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return res.json();
// });

// function DataFetcher() {
//   const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos/1', fetcher);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <p>User: {data.userId}</p>
//       <p>Title: {data.title}</p>
//     </div>
//   );
// }

// export default DataFetcher;
