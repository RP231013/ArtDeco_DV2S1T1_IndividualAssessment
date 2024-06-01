import React, { useEffect, useState } from 'react';
import api from '../api';
import './Artworks.css';

const Artworks = () => {
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
    // Implement like functionality
    // You can send a POST request to the like endpoint and update the state
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/artworks/${id}`);
      setArtworks(artworks.filter((artwork) => artwork._id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="artworks-container">
      {artworks.map((artwork) => (
        <div className="artwork-card" key={artwork._id}>
          <img src={artwork.image} alt={artwork.artworkTitle} />
          <h3>{artwork.artworkTitle}</h3>
          <p>{artwork.description}</p>
          <div className="card-actions">
            <button onClick={() => handleLike(artwork._id)}>Like</button>
            {localStorage.getItem('token') && localStorage.getItem('token').endsWith('@adadmin.com') && (
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
