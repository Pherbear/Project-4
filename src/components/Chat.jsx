import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const Chat = () => {
  // State to manage the list of messages
  const [messages, setMessages] = useState([]);

  // Function to add a new message to the chat
  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-app">
      <h1>React Chat App</h1>
      {/* Message list component */}
      <MessageList messages={messages} />

      {/* Message input component */}
      <MessageInput addMessage={addMessage} />
    </div>
  );
};

export default Chat;
