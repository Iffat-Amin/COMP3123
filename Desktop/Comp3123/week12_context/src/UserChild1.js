import React, { useContext } from 'react';
import UserContext from './UserContext';
import { UserConsumer } from './UserContext';
import User1Child1 from './User1Child1';

export default function UserChild1() {
  const userCtx = useContext(UserContext); // Correctly using useContext to access the context value

  return (
    <div>
      <h3>UserChild1</h3>
      <p>User Context: {JSON.stringify(userCtx)}</p>
      <p>User First Name: {userCtx?.fnm || 'N/A'}</p>
      <User1Child1></User1Child1>
    </div>
  );
}
