import React from 'react';
import Message from './Message';

const MessageList = ({ messages, data }) => {
  console.log(messages)

  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <Message key={index} message_data={message} data={data}/>
      ))}
    </div>
  );
};

export default MessageList;