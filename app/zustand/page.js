'use client'
import useStore from './store';

function ZustandExample() {
  const isLoggedIn = useStore(state => state.isLoggedIn);
  const login = useStore(state => state.login);
  const logout = useStore(state => state.logout);

  return (
    <div>
		<h1>Zustand Example</h1>
      {isLoggedIn ? (
        <div>
          <p>Welcome, User!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in.</p>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
}

export default ZustandExample;
