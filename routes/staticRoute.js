const { Router } = require('express');
const { URL_Shortner } = require('../models/urlShortner.model');
const { restrictTo } = require('../middlewares/Auth');
const staticRouter = Router();

staticRouter.get('/', restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
    const data = await URL_Shortner.find({ createdBy: req.user.id });
    res.render('home.ejs', { data })
})

module.exports = staticRouter;