import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './actions';

function Login() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div>
		<h1>Redux Example</h1>
      {isLoggedIn ? (
        <div>
          <p>Welcome, User!</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in.</p>
          <button onClick={() => dispatch(login())}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Login;
