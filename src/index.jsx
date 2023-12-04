import App from './components/App';
import PocketBase from "https://cdn.jsdelivr.net/npm/pocketbase@0.19.0/+esm";
import React from 'react';
import ReactDOM from 'react-dom/client';

import Chat from './components/Chat';

const USERNAME = 'timothyvu99@gmail.com'//'bryan.garcia.cuevas@gmail.com'
const PASSWORD = 'tim420'

const pb = new PocketBase('http://127.0.0.1:8090')
const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
const root = ReactDOM.createRoot(document.getElementById('root'));

const message_id = 'j6wm2fcc3llkpf6'

async function getMessagebyID(message_id){
  const record = await pb.collection('message').getOne(message_id, {
    expand: 'relField1,relField2.subRelField',
  });

  return record.message
}

const message = await getMessagebyID(message_id)

root.render(
  <React.StrictMode>
    <App/>
    <h1>Hello, {authData.admin.email}</h1>
<<<<<<< HEAD
    <h1>Message: {message}</h1>
=======
    <Chat />
>>>>>>> 9d61967a091703870e1321126b96032c0dce740b
  </React.StrictMode>
);