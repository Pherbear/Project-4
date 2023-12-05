import App from './components/App';
import PocketBase from "https://cdn.jsdelivr.net/npm/pocketbase@0.19.0/+esm";
import React from 'react';
import ReactDOM from 'react-dom/client';

const USERNAME = process.env.REACT_APP_POCKETBASE_USERNAME
const PASSWORD = process.env.REACT_APP_POCKETBASE_PASSWORD

const pb = new PocketBase(`http://127.0.0.1:8090`)
const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
const root = ReactDOM.createRoot(document.getElementById('root'));

async function getMessagebyID(message_id){
  const record = await pb.collection('messages').getOne(message_id, {
    expand: 'relField1,relField2.subRelField',
  });

  return record.message
}

async function getAllMessages(){
  const records = await pb.collection('messages').getFullList({
    sort: '-created',
  });

  return records
}

root.render(
  <React.StrictMode>
    <App/>
    <h1>Hello, {authData.admin.email}</h1>
    <h1>Messages: </h1>
  </React.StrictMode>
);