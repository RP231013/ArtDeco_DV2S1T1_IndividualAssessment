import React, { useState } from 'react';
import api from '../api';
import './AuthForm.css';

const ArtworkForm = () => {
  const [formData, setFormData] = useState({
    artworkTitle: '',
    artist: '',
    dateCreated: '',
    description: '',
    medium: '',
    imageUrl: ''  // Add imageUrl to formData
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { artworkTitle, artist, dateCreated, description, medium, imageUrl } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/artworks', formData);
      setSuccess('Artwork uploaded successfully');
      setError('');
      setFormData({
        artworkTitle: '',
        artist: '',
        dateCreated: '',
        description: '',
        medium: '',
        imageUrl: ''  // Reset imageUrl
      });
    } catch (err) {
      setError('Failed to upload artwork');
      setSuccess('');
    }
  };

  return (
    <div className="auth-form">
      <div className="logo">AD</div>
      <h2>Upload Artwork</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={onSubmit}>
        <label>Title: <input type="text" name="artworkTitle" value={artworkTitle} onChange={onChange} required /></label>
        <label>Artist: <input type="text" name="artist" value={artist} onChange={onChange} required /></label>
        <label>Date: <input type="date" name="dateCreated" value={dateCreated} onChange={onChange} required /></label>
        <label>Description: <textarea name="description" value={description} onChange={onChange} required></textarea></label>
        <label>Medium: <input type="text" name="medium" value={medium} onChange={onChange} required /></label>
        <label>Image URL: <input type="text" name="imageUrl" value={imageUrl} onChange={onChange} required /></label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ArtworkForm;
