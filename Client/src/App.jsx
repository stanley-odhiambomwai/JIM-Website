import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import SignIn from './components/SignIn';
import Activities from './components/Activities';
import Ideas from './components/Ideas';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/ideas" element={<Ideas />} />
      </Routes>
    </Router>
  );
};

export default App;
