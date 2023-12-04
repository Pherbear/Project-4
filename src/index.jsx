import App from './components/App';
import PocketBase from "https://cdn.jsdelivr.net/npm/pocketbase@0.19.0/+esm";
import React from 'react';
import ReactDOM from 'react-dom/client';

const USERNAME = 'bryan.garcia.cuevas@gmail.com'
const PASSWORD = 'realtrapshit'

const pb = new PocketBase('http://127.0.0.1:8090')

const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
console.log(authData)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <h1>Hello, {authData.admin.email}</h1>
  </React.StrictMode>
);