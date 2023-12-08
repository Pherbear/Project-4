import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UserList from './UserList';

const Chat = ({messages, addMessage, clearLog, users, noLogin, setNoLoginFalse}) => {

  return (
    <div style={styles.container}>
      <div style={styles.chatContainer}>
        <h1 style={styles.header}>The Yap Yard</h1>
        <div style={styles.chat}>
          <MessageList messages={messages} noLogin={noLogin} setNoLoginFalse={setNoLoginFalse}/>
          <MessageInput addMessage={addMessage} />
          <button 
            onClick={clearLog}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            style={styles.clearMessages}
            >
            Clear Messages
          </button>
        </div>
      </div>
      <div style={styles.userList}>
        <UserList users={users} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100vh',
    backgroundColor: 'turquoise'
  },
  chatContainer: {
    flex: 1,
    padding: '20px',
    borderRight: '1px solid #ccc',
  },
  header: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
  },
  chat: {
    display: 'flex',
    flexDirection: 'column',
    height: '90%',
  },
  userList: {
    width: '350px',
    padding: '20px',
    backgroundColor: 'hotpink'
  },
  clearMessages: {
    margin: '10px'
  }
};

export default Chat;
