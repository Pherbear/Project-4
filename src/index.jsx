import App from './components/App';
import PocketBase from "https://cdn.jsdelivr.net/npm/pocketbase@0.19.0/+esm";
import React from 'react';
import ReactDOM from 'react-dom/client';

import Chat from './components/Chat';

const USERNAME = 'timothyvu99@gmail.com'//'bryan.garcia.cuevas@gmail.com'
const PASSWORD = 'tim420'

const pb = new PocketBase('http://127.0.0.1:8090')

const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
console.log(authData)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <h1>Hello, {authData.admin.email}</h1>
    <Chat />
  </React.StrictMode>
);