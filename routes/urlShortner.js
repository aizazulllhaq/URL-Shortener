const { Router } = require('express');
const urlShortnerRouter = Router();
const urlShortnerController = require('../controllers/urlShortnerController');

urlShortnerRouter
    .post('/', urlShortnerController.shortURL)
    .get('/url/:sID', urlShortnerController.url)
    .get('/url/Analytics/:sID', urlShortnerController.urlAnalyrics);


module.exports = urlShortnerRouter;