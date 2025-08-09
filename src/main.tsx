import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Login from './login.tsx'
import SignUp from './SignUp.tsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import AuthRoute from './AuthRoute.tsx'

const firebaseConfig = {
  apiKey: "AIzaSyAe2R3q2R_6ba3nef4-vAUwO9Y8qP0Xv3Y",
  authDomain: "authentication-9689f.firebaseapp.com",
  projectId: "authentication-9689f",
  storageBucket: "authentication-9689f.firebasestorage.app",
  messagingSenderId: "961480596378",
  appId: "1:961480596378:web:44e1d5b535a64f9c243823",
  measurementId: "G-2W9MHWRJ2L"
};

initializeApp(firebaseConfig);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AuthRoute><App /></AuthRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  </StrictMode>,
)
