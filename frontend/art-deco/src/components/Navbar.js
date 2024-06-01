import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, user, setAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/artworks">Artworks</Link>
      <Link to="/upload">Upload</Link>
      {isAuthenticated ? (
        <>
          <span>{user ? user.name : ''}</span>
          <button className='logoutBtn' onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
