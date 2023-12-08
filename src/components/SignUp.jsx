import React, { useState } from 'react';

const SignUp = ({ onSignUp }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform validation (you can add more validation logic here)

    // Call the onSignUp function with the user information
    onSignUp({ username, email, password, name });

    // Clear the form fields after submission
    setUsername('');
    setPassword('');
    setEmail('')
    setName('')
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
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            style={styles.input}
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            style={styles.input}
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
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
        <button style={styles.button} type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
