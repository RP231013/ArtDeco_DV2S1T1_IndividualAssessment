import React, { useEffect, useState } from 'react';
import api from '../api';
import './Artworks.css';

const Artworks = ({ user }) => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const res = await api.get('/artworks');
        setArtworks(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchArtworks();
  }, []);

  const handleLike = async (id) => {
    try {
      const res = await api.post(`/artworks/${id}/like`);
      setArtworks(artworks.map((artwork) => (artwork._id === id ? res.data : artwork)));
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/artworks/${id}`);
      setArtworks(artworks.filter((artwork) => artwork._id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const isAdmin = user && user.email && user.email.endsWith('@adadmin.com');

  return (
    <div className="artworks-container">
      {artworks.map((artwork) => (
        <div className="artwork-card" key={artwork._id}>
          <img src={artwork.imageUrl} alt={artwork.artworkTitle} />
          <h3>{artwork.artworkTitle}</h3>
          <p>{artwork.description}</p>
          <div className="card-actions">
            <button onClick={() => handleLike(artwork._id)}>Like</button>
            {isAdmin && (
              <button onClick={() => handleDelete(artwork._id)}>Delete</button>
            )}
            <span>{artwork.likes} Likes</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Artworks;
