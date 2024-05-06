import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import {Home,Login,MenuTrueHome,Profile,Search,Signin} from './pages'
import './App.css'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuTrueHome/>} />
        <Route path="/home" element={<Home/>} />


      </Routes>
    </Router>
    
  )
}

export default App
