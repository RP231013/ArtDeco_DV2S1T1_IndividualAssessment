import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Artworks from './components/Artworks';
import ArtworkForm from './components/ArtworkForm';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/artworks" element={<Artworks />} />
        <Route path="/upload" element={<ArtworkForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
