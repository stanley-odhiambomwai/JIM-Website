import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <Link to="/" className="text-white mx-2">Home</Link>
      <Link to="/register" className="text-white mx-2">Register</Link>
      <Link to="/signin" className="text-white mx-2">Sign In</Link>
      <Link to="/activities" className="text-white mx-2">Activities</Link>
      <Link to="/ideas" className="text-white mx-2">Ideas</Link>
    </nav>
  );
};

export default Navbar;
