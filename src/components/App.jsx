import React, {useState} from "react";
import PocketBase from "https://cdn.jsdelivr.net/npm/pocketbase@0.19.0/+esm";
import ReactDOM from 'react-dom/client';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import Chat from "./Chat";
import Login from "./Login";
import SignUp from "./SignUp";

const pb = new PocketBase(`http://127.0.0.1:8090`)

async function adminAuth(){
  const USERNAME = process.env.REACT_APP_POCKETBASE_USERNAME
  const PASSWORD = process.env.REACT_APP_POCKETBASE_PASSWORD
  const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
}

//adminAuth()

async function getAllMessages(){
  const records = await pb.collection('messages').getFullList({
    sort: '-created',
  });
  
  records.reverse()

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

async function getUserName(userID){
  const record = await pb.collection('users').getOne(userID, {
    expand: 'relField1,relField2.subRelField',
  });

  return record.username
}

async function getUsers(){
  const records = await pb.collection('users').getFullList({
    sort: '-created',
  });

  return records
}

const allUsers = await getUsers()

function App() {
  
  const [currentUser, setCurrentUser] = useState()  
  const [messages, setMessages] = useState(load_data)
  const [users, setUsers] = useState(allUsers)
  const [form, setForm] = useState(false)
  const [noLogin, setNoLogin] = useState(false)

  console.log(pb.authStore)

  function formChange(){
    setForm(!form)
  }
  
  async function onSignUp(login_info){
    console.log(login_info)
    const {name, username, password, email} = login_info

    const data = {
      "username": username,
      "email": email,
      "emailVisibility": true,
      "password": password,
      "passwordConfirm": password,
      "name": name
    };

    const record = await pb.collection('users').create(data);
    onLogin({email, password})
    setUsers([...users, data])
  }

  function logout(){
    pb.authStore.clear()
    setCurrentUser('')
  }

  async function onLogin({email, password}){
    console.log("logging in")
    const authData = await pb.collection('users').authWithPassword(
      email,
      password,
    );
    if (pb.authStore.isValid) {
      setCurrentUser(pb.authStore.baseModel)
      setNoLogin(false)
    } else {
      console.log("Login Failed!")
    }
    console.log(users)
  }

  pb.collection('messages').subscribe('*', function (e) {

    if(pb.authStore.baseToken == ''){
      setMessages([...messages, e.record])
    }

    if(currentUser && e.action === 'create'){
      if(currentUser.id != e.record.relation){
        setMessages([...messages, e.record])
      }
    }
  })

  const addMessage = async (message_data) => {
    if (!currentUser){
      setNoLogin(true)
      return
    }

    const data = {
      "relation": currentUser.id,
      "message": message_data.message,
      "user": await getUserName(currentUser.id)
    };
    
    const record = await pb.collection('messages').create(data);
    setMessages([...messages, record])
  };

  function clearLog() {
    clearMessages()
    setMessages([])
  }

  return (
    <div className="App">
      {
        currentUser? 
          <div> 
            <a>Hello, {currentUser.username} </a>
            <button onClick={logout}>Logout</button> 
          </div> 
        : <div>
            <a>Not Logged In</a>
            {
              form?
              <div>
                <SignUp onSignUp={onSignUp}/>
                <button onClick={formChange}>Already Have an Account?</button>
              </div>
              :
              <div>
                <Login onLogin={onLogin}/>
                <button onClick={formChange}>Don't Have an Account?</button>
              </div>
            }
          </div>
      }
      <Chat 
        messages={messages} 
        addMessage={addMessage} 
        clearLog={clearLog}
        users={users}
        noLogin={noLogin}
      />
    </div>
  );
}

export default App;
