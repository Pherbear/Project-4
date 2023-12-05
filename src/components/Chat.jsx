import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UserList from './UserList';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([
    { id: 1, name: 'User1' },
    { id: 2, name: 'User2' },
    // Add more users as needed
  ]);

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatContainer}>
        <h1 style={styles.header}>React Chat Room</h1>
        <div style={styles.chat}>
          <MessageList messages={messages} />
          <MessageInput addMessage={addMessage} />
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
    height: '100%',
  },
  userList: {
    width: '200px',
    padding: '20px',
    backgroundColor: 'hotpink'
  },
};

export default Chat;
