import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Registration successful:', formData);
    try {
      // Replace 'dummy-url' with your actual API endpoint
      const response = await axios.post('https://dummy-url.com/register', formData);

      // Handle the response if needed
      console.log('Registration successful:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Registration</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Username:
          <input style={styles.input} type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label style={styles.label}>
          Email:
          <input style={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label style={styles.label}>
          Password:
          <input style={styles.input} type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <button style={styles.button} type="submit">Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    margin: '10px 0',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    marginBottom: '10px',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
};

export default Registration;
