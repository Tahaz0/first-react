import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Api from './components/Api';
import CmntApi from './components/CmntApi';
import About from './components/About';
import Login from './components/Login';
import Private from './components/Private';


let divStyle = {
  justifyContent: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem'
}

function App() {


  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<div style={divStyle}> <Api /></div>} />

        <Route path='/about/:id' element={<div style={divStyle}> <About /> </div>} />

        <Route path='/comment' element={<Private> <div style={{ height: '100vh', width: '100%', backgroundColor: 'blue' }}><h1>HELLO, welcome to comment page</h1>
          <div style={divStyle}>
            <CmntApi

            />
          </div>
        </div> </Private>} />

        <Route
          path='/login' element={<Login />}
        />
      </Routes>
    </BrowserRouter>

  );
};

export default App;

