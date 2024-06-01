import React from 'react';
import Artworks from './Artworks';

const Hero = ({ user }) => {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to Art Deco</h1>
        <p>Discover and share amazing artworks.</p>
      </section>
      <Artworks user={user} /> {/* Pass the user prop */}
    </div>
  );
};

export default Hero;
