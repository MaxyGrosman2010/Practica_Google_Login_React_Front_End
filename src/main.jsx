import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App.jsx'
import './index.css'

const {VITE_CLIENT_ID} = import.meta.env;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={VITE_CLIENT_ID} >
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
console.log(VITE_CLIENT_ID);