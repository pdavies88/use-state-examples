import { useAuth } from './context';

function UserStatus() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <p>User is {isLoggedIn ? 'logged in' : 'logged out'}</p>
    </div>
  );
}

export default UserStatus;
