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

  const styles = {
    input: {
        justifyContent: 'center',
        height: '30px',
        width: '800px'
    },
    button: {
        height: '30px'
    },
    input: {
        outline:'none',
        color: 'white'
    }
  };

  return (
    <div className="message-input flex block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <input
        type="text"
        placeholder="Type your message..."
        value={newMessage}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        style={styles.input}
      >
      </input>
      <button 
        onClick={handleSendMessage} 
        style={styles.button}
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Post
      </button>
    </div>
  );
};

export default MessageInput;
