import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCHACcNcCMk4qxMB4TUGCBiQpIYhqg7tmg",
  authDomain: "react-coderhouse-ago-23.firebaseapp.com",
  projectId: "react-coderhouse-ago-23",
  storageBucket: "react-coderhouse-ago-23.appspot.com",
  messagingSenderId: "935714561488",
  appId: "1:935714561488:web:34e0efad238815bc8e2dd5"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
