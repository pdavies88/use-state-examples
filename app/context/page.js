'use client';
import { AuthProvider } from './context';
import Login from './login';
import UserStatus from './status';

function ContextExample() {
  return (
    <AuthProvider>
      <Login />
      <UserStatus />
    </AuthProvider>
  );
}

export default ContextExample;
