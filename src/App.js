import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/pages/Footer/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
