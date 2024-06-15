// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Define user credentials
  const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidUser = users.some(
      (user) => user.username === username && user.password === password
    );
    if (isValidUser) {
      onLogin();
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="formGroup">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
