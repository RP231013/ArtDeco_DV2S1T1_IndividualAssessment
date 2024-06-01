const express = require('express');
const { createArtwork, getArtworks, deleteArtwork, likeArtwork } = require('../controllers/artworkController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createArtwork);
router.get('/', getArtworks);
router.delete('/:id', auth, deleteArtwork);
router.post('/:id/like', auth, likeArtwork);

module.exports = router;
