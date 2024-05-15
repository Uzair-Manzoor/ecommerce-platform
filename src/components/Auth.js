import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';

const Auth = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = () => {
    axios.post('/api/auth/login', form)
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        dispatch(login(token));
      })
      .catch(error => console.error('Error logging in:', error));
  };

  return (
    <div className="auth">
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Auth;
