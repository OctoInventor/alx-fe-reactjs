import React, { useContext } from 'react';
import UserInfo from './UserInfo';
import UserContext from './UserContext';

const UserDetails = () => {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Details</h2>
      <UserInfo />
    </div>
  );
};

export default UserDetails;