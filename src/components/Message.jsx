import React from 'react';

const Message = ({ message_data }) => {
  const { message, created, user } = message_data;

  return (
    <div className="message">
      <p>
        <strong>{user}</strong>: {message}
      </p>
      <p className="timestamp">{created}</p>
    </div>
  );
};

export default Message;