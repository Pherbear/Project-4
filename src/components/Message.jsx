import React from 'react';

const Message = ({ message }) => {
  const { sender, content, timestamp } = message;

  return (
    <div className="message">
      <p>
        <strong>{sender}</strong>: {content}
      </p>
      <p className="timestamp">{timestamp}</p>
    </div>
  );
};

export default Message;