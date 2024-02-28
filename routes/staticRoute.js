const { Router } = require('express');
const { URL_Shortner } = require('../models/urlShortner.model');
const staticRouter = Router();

staticRouter.get('/', async (req, res) => {
    const data = await URL_Shortner.find({});
    res.render('home.ejs', { data })
})

module.exports = staticRouter;