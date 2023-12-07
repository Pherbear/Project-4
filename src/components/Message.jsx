import React from 'react';
import '../assets/main.css'

const Message = ({ message_data }) => {
  const { message, created, user } = message_data;

  let date = new Date(created)
  let options = {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true
  }
  let formattedDate = date.toLocaleString('en-US', options)

  return (
    <div 
      style={styles.messageContainer}
      className='h-4 bg-green-400 transform origin-bottom-right rounded-sm'
    >
      <div 
        style={styles.message}

        >
        <p>
          <strong>{user}</strong>: {message}   
        </p>
      </div>
        {<p style={styles.timestamp}>{formattedDate}</p>}
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

