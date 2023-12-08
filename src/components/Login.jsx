import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation (you can add more validation logic here)

    // Call the onLogin function with the user information
    onLogin({ email, password });

    // Clear the form fields after submission
    setEmail('');
    setPassword('');
  };

  const styles = {
    input: {
      border: '1px solid black',
      width: '400px'
    },
    button: {
      border: '1px solid black',
      padding: '2px',
      margin: '8px'
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            style={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            style={styles.input}
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button style={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
