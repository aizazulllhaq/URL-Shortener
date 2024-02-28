const { Router } = require('express');
const urlShortnerRouter = Router();
const urlShortnerController = require('../controllers/urlShortnerController');

urlShortnerRouter
    .post('/shortURL', urlShortnerController.shortURL)
    .get('/:sID', urlShortnerController.url)
    .get('/Analytics/:sID', urlShortnerController.urlAnalyrics)

module.exports = urlShortnerRouter;