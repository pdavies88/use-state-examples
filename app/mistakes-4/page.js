'use client';
// Forgetting to Handle State Initialization Properly
import { useState } from 'react';

function UserProfile() {
//   const [user, setUser] = useState(); // Initial state is undefined
  const [user, setUser] = useState({ username: 'test' }); // Properly initialized state

  return (
    <div>
      <p>Username: {user.username}</p> {/* This will cause an error */}
    </div>
  );
}

export default UserProfile;
