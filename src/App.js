import React from 'react'
import Index from './Pages/Home/HomeScreen/Index';
import {BrowserRouter as Router , Route, Routes}from 'react-router-dom';
import Home from './Pages/Home/HomeScreen/Index';
import Navbar from './Pages/Home/Navbar';
const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<div>404 Not found</div>}/>
          <Route/>
        </Routes>
      </Router>
     
    </div>
  )
}

export default App
