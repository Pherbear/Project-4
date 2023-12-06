import React from 'react';

const Message = ({ message_data }) => {
  const { message, created, user } = message_data;

  return (
    <div style={styles.messageContainer}>
      <div style={styles.message}>
        <p>
          <strong>{user}</strong>: {message}   
        </p>
      </div>
        {<p style={styles.timestamp}>{created}</p>}
      </div>
  );
  }
  const styles = {
    messageContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px'
    },
    
    timestamp: {
      textAlign: 'right',
      color: '#888', 
      fontSize: '12px' 
    },
};

export default Message;

