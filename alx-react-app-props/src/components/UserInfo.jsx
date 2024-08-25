import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserInfo = () => {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
};

export default UserInfo;