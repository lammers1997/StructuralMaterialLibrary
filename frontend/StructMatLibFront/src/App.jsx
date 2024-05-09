// import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { jwtDecode } from "jwt-decode";


import Materials from './pages/Materials'
import Home from './pages/Home'
import AddNew from './pages/AddNew'
import Login from './pages/Login'
import Register from './pages/Register'

import NavBar from './components/NavBar'

import './App.css'
import { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    const token = localStorage.getItem('loggedAppUser');
    if (!token) {
      return;
    }

    let decodedToken;
    try {
      decodedToken = jwtDecode(token);

    } catch(error) {
      // Handle invalid token error
      console.error('Invalid token:', error);
    }

    const tokenExpireTime = decodedToken.exp * 1000;
    const currentTime = Date.now();
    console.log(tokenExpireTime - currentTime)

    setTimeout(() => {
      window.alert("Session has ended!");
      localStorage.removeItem('loggedAppUser');
      window.location.href = '/login';
    }, tokenExpireTime - currentTime);
  }, []);

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/addnew" element={<AddNew />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
