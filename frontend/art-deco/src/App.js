import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Artworks from './components/Artworks';
import ArtworkForm from './components/ArtworkForm';
import Login from './components/Login';
import Register from './components/Register';
import api from './api';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      fetchUser();
    }
  }, []);

  const fetchUser = async () => {
    try {
      const res = await api.get('/auth/user');
      setUser(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (!isAuthenticated && window.location.pathname !== '/login' && window.location.pathname !== '/register') {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} user={user} setAuth={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Hero user={user} />} />
        <Route path="/artworks" element={isAuthenticated ? <Artworks user={user} /> : <Login setAuth={setIsAuthenticated} />} />
        <Route path="/upload" element={isAuthenticated ? <ArtworkForm /> : <Login setAuth={setIsAuthenticated} />} />
        <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
        <Route path="/register" element={<Register setAuth={setIsAuthenticated} />} />
      </Routes>
    </div>
  );
};

export default App;
