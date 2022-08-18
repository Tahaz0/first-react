import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clock from './components/Clock';
import Navbar from './components/Navbar';
import List from './components/Watched';


function App() {


  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Clock name="" />} />
        <Route path='/about' element={<div style={{ height: '100vh', width: '100%', backgroundColor: 'black' }}><h1>HELLO, welcome to about page</h1></div>} />
        <Route path='/watched' element={<div><h3 style={{ color: 'green', textAlign: 'center' }}>YOUR SERIES WATCHED LIST</h3> <List /></div>} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;

