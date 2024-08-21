'use client';
// Incorrectly Handling State with Objects
import { useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState({ name: '', age: 0 });

//   const updateName = (newName) => {
//     user.name = newName; // Directly modifying state
//     setUser(user);
//   };

  const updateName = (newName) => {
    setUser(prevUser => ({ ...prevUser, name: newName })); // Correctly updating state
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => updateName('John')}>Update Name</button>
    </div>
  );
}

export default UserProfile;
