const Artwork = require('../models/Artwork');

exports.createArtwork = async (req, res) => {
  const { artworkTitle, artist, dateCreated, medium, description } = req.body;

  try {
    const newArtwork = new Artwork({
      artworkTitle,
      artist,
      dateCreated,
      medium,
      description,
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
    const artwork = await Artwork.findById(req.params.id);
    if (!artwork) {
      return res.status(404).json({ msg: 'Artwork not found' });
    }

    // Check if user is an admin
    const adminEmail = req.user.email.endsWith('@adadmin.com');
    if (!adminEmail) {
      return res.status(403).json({ msg: 'User not authorized' });
    }

    await artwork.remove();
    res.json({ msg: 'Artwork removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
