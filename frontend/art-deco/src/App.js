import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Artworks from './components/Artworks';
import ArtworkForm from './components/ArtworkForm';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/artworks" element={isAuthenticated ? <Artworks /> : <Login setAuth={setIsAuthenticated} />} />
        <Route path="/upload" element={isAuthenticated ? <ArtworkForm /> : <Login setAuth={setIsAuthenticated} />} />
        <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
        <Route path="/register" element={<Register setAuth={setIsAuthenticated} />} />
      </Routes>
    </div>
  );
};

export default App;
