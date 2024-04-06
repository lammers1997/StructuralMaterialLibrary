// import { useEffect } from 'react'
import { BrowserRouter  as Router, Route, Routes } from 'react-router-dom'

import Materials from './pages/Materials'
import Home from './pages/Home'

import NavBar from './components/NavBar'

import './App.css'

const App = () => {
  return (
     <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/materials" element={<Materials/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
