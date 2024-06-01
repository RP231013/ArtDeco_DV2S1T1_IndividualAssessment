import React, { useState } from 'react';
import api from '../api';

const Register = ({ setAuth }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const { name, surname, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/register', { name, surname, email, password });
      localStorage.setItem('token', res.data.token);
      setAuth(true);
    } catch (err) {
      setError('User already exists or invalid data');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="surname"
        value={surname}
        onChange={onChange}
        placeholder="Surname"
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
