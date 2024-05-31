import React from 'react';

const artworks = [
  // Add your artworks here
  { title: 'Sunset', artist: 'John Doe', date: '2021', description: 'Beautiful sunset', type: 'Painting' },
  // More artworks...
];

const Artworks = () => {
  return (
    <section className="artworks">
      <h2>Artworks</h2>
      <div className="artwork-list">
        {artworks.map((art, index) => (
          <div key={index} className="artwork-card">
            <h3>{art.title}</h3>
            <p>{art.artist}</p>
            <p>{art.date}</p>
            <p>{art.description}</p>
            <p>{art.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artworks;
