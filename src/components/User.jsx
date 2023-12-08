import React from 'react';
import image from '../assets/default.jpg'

const User = ({ user }) => {
  return (
  <li className="py-3 sm:py-4">
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="w-8 h-8 rounded-full" src={image} alt="Neil image"/>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
          {user.username}
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          {user.email}
        </p>
      </div>
    </div>
  </li>
)};

export default User;