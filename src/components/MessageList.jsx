import React from 'react';
import Message from './Message';

const MessageList = ({ messages }) => {
  console.log(messages)

  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <Message key={index} message_data={message}/>
      ))}
    </div>
  );
};

export default MessageList;