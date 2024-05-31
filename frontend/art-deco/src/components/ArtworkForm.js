import React from 'react';

const ArtworkForm = () => {
  return (
    <section className="upload-artwork">
      <h2>Upload Artwork</h2>
      <form>
        <label>Title: <input type="text" name="title" /></label>
        <label>Artist: <input type="text" name="artist" /></label>
        <label>Date: <input type="date" name="date" /></label>
        <label>Description: <textarea name="description"></textarea></label>
        <label>Type: <input type="text" name="type" /></label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ArtworkForm;
