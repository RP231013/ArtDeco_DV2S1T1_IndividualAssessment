const mongoose = require('mongoose');

const ArtworkSchema = new mongoose.Schema({
  artworkTitle: { type: String, required: true },
  artist: { type: String, required: true },
  dateCreated: { type: Date, required: true },
  medium: { type: String, required: true },
  description: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: [{ text: String, date: Date, user: String }],
});

module.exports = mongoose.model('Artwork', ArtworkSchema);
