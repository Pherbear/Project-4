import React, {useState} from "react";
import PocketBase from "https://cdn.jsdelivr.net/npm/pocketbase@0.19.0/+esm";
import ReactDOM from 'react-dom/client';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import Chat from "./Chat";

const USERNAME = process.env.REACT_APP_POCKETBASE_USERNAME
const PASSWORD = process.env.REACT_APP_POCKETBASE_PASSWORD

const pb = new PocketBase(`http://127.0.0.1:8090`)
const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)

const currentUser_ID = 'aywlc8y4yt5naj9'

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

async function getAllMessages(){
  const records = await pb.collection('messages').getFullList({
    sort: '-created',
  });

  return records
}


const load_data = await getAllMessages()

async function clearMessages(){
  const records = await pb.collection('messages').getFullList({
    sort: '-created',
  });

  records.map((record, index) => (
    pb.collection('messages').delete(record.id)
  ))
}

function App() {
  
  const [messages, setMessages] = useState(load_data);
  
  const addMessage = async (message_data) => {
    console.log(message_data)

    const data = {
      "relation": currentUser_ID,
      "message": message_data.message
    };
    
    const record = await pb.collection('messages').create(data);
    setMessages([...messages, record])
  };

  function clearLog() {
    clearMessages()
    setMessages([])
  }

  return (
    <div className="App" style={styles.container}>
      <h1>Hello, {authData.admin.email}</h1>
      <h1>Messages: </h1>
      <div style={styles.chatContainer}> 
        <MessageList messages={messages} data={pb}/>
        <MessageInput addMessage={addMessage}/>
      </div>
      <button onClick={clearLog}>
        Clear Messages
      </button>
      {/* <Chat /> */}
    </div>
  );
}

export default App;
