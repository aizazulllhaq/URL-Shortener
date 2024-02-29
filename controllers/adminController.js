const { URL_Shortner } = require('../models/urlShortner.model');

exports.allUsersShortURLs = async (req, res) => {
    try {
        const allURLs = await URL_Shortner.find({});
        console.log(req.user);
        console.log(allURLs);
        res.render('home.ejs', {
            data: allURLs
        })
    } catch (err) {
        res.json({
            success: false,
            error: err.message
        })
    }
}