import React, { useEffect, useState } from 'react';
import api from '../api';
import './Artworks.css';

const Artworks = ({ user }) => {
  const [artworks, setArtworks] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [filterOption, setFilterOption] = useState(false);

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

  const sortedArtworks = [...artworks]
    .filter(artwork => !filterOption || artwork.likes > 5)
    .sort((a, b) => {
      if (sortOption === 'date-new-old') {
        return new Date(b.dateCreated) - new Date(a.dateCreated);
      } else if (sortOption === 'date-old-new') {
        return new Date(a.dateCreated) - new Date(b.dateCreated);
      } else if (sortOption === 'likes-desc') {
        return b.likes - a.likes;
      } else {
        return 0;
      }
    });

  return (
    <div className="artworks-page">
      <div className="controls">
        <div>
          <label>Sort by: </label>
          <select onChange={(e) => setSortOption(e.target.value)}>
            <option value="">Select</option>
            <option value="date-new-old">Date (New-Old)</option>
            <option value="date-old-new">Date (Old-New)</option>
            <option value="likes-desc">Likes (Descending)</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={filterOption} onChange={() => setFilterOption(!filterOption)} />
            Filter likes more than 5
          </label>
        </div>
      </div>
      <div className="artworks-container">
        {sortedArtworks.map((artwork) => (
          <div className="artwork-card" key={artwork._id}>
            <img src={artwork.imageUrl} alt={artwork.artworkTitle} />
            <h3>{artwork.artworkTitle}</h3>
            <p>{artwork.description}</p>
            <p className="date-created">Created on: {new Date(artwork.dateCreated).toLocaleDateString()}</p>
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
    </div>
  );
};

export default Artworks;
