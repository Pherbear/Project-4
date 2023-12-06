import React, { useState } from 'react';

const MessageInput = ({ addMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      // Create a new message object with a placeholder sender and current timestamp
      const message_data = {
        message: newMessage
      };

      // Pass the new message to the parent component to update the messages state
      addMessage(message_data);

      // Clear the input field
      setNewMessage('');
    }
  };

  const handleKeyDown = (e) => {
    // If the user presses Enter, send the message
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Type your message..."
        value={newMessage}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default MessageInput;
