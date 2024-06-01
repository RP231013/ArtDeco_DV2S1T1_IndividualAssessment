const Artwork = require('../models/Artwork');

exports.createArtwork = async (req, res) => {
    const { artworkTitle, artist, dateCreated, medium, description, imageUrl } = req.body;
  
    try {
      const newArtwork = new Artwork({
        artworkTitle,
        artist,
        dateCreated,
        medium,
        description,
        imageUrl 
      });
  
      const artwork = await newArtwork.save();
      res.json(artwork);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };

exports.getArtworks = async (req, res) => {
  try {
    const artworks = await Artwork.find();
    res.json(artworks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteArtwork = async (req, res) => {
    try {
      console.log('req.user:', req.user);  
  
      const artwork = await Artwork.findById(req.params.id);
      if (!artwork) {
        console.log('Artwork not found');
        return res.status(404).json({ msg: 'Artwork not found' });
      }
  
      
      if (!req.user || !req.user.email || !req.user.email.endsWith('@adadmin.com')) {
        console.log('User not authorized:', req.user.email);
        return res.status(403).json({ msg: 'User not authorized' });
      }
  
      await Artwork.findByIdAndDelete(req.params.id);  
      res.json({ msg: 'Artwork removed' });
    } catch (err) {
      console.error('Server error:', err.message);
      res.status(500).send('Server error');
    }
  };

exports.likeArtwork = async (req, res) => {
    try {
      const artwork = await Artwork.findById(req.params.id);
      if (!artwork) {
        return res.status(404).json({ msg: 'Artwork not found' });
      }
  
      artwork.likes += 1;
      await artwork.save();
  
      res.json(artwork);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  