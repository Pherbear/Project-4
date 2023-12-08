import React from 'react';
import Message from './Message';

const MessageList = ({ messages, noLogin }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <Message 
          key={index} 
          message_data={message}
          className="message"
          />
      ))}
      <div style={{color: 'red'}}>
        {noLogin? <>Error: Login Required.</>:<></>}
      </div>
    </div>
  );
};

export default MessageList;