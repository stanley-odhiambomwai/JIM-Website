import React, { useState } from 'react';

const SignIn = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      credentials: 'include', // Include credentials (cookies) in the request
    });

    if (response.ok) {
      const user = await response.json();
      console.log('Signed in user:', user);
      // Redirect or update state as needed
    } else {
      console.error('Sign in failed. Please try again!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold">Sign In</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="p-2 m-2 border"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="p-2 m-2 border"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
