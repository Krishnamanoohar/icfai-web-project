import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import Sis from './components/pages/Sis'
import Home from './components/pages/Home';
import Programs from './components/pages/Programs';
import Placements from './components/pages/Placements';
import CampusLife from './components/pages/CampusLife';
import StudentLogin from './components/pages/StudentLogin';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/placements' element={<Placements/>} />
          <Route path='/programs' element={<Programs/>} />
          <Route path='/campuslife' element={<CampusLife/>}/>
          <Route path='/student-login-btn' element={<StudentLogin/>}/>
          <Route path='/Sis' element={<Sis />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;