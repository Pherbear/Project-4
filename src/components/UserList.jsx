import React from 'react';
import User from './User';

const UserList = ({ users }) => {
  return (
    <div className="max-w-2xl mx-auto">
            <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Users</h3>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {users.map((user, index) => (
                            <User key={index} user={user} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
  );
};

export default UserList;