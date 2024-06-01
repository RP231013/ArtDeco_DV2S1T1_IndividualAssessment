const express = require('express');
const { createArtwork, getArtworks, deleteArtwork } = require('../controllers/artworkController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createArtwork);
router.get('/', getArtworks);
router.delete('/:id', auth, deleteArtwork);

module.exports = router;
