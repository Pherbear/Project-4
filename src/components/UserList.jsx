import React from 'react';
import User from './User';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h2>Users</h2>
      <ul>
        {users.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;