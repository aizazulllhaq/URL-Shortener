const shortid = require('shortid');
const { URL_Shortner } = require('../models/urlShortner.model');

exports.shortURL = async (req, res) => {
    try {
        const { url } = req.body;
        console.log(req.body)
        if (!url) return res.json({ data: "URL Must be Required" })
        const sID = shortid()
        const newURLShortner = new URL_Shortner({
            shortID: sID,
            redirectURL: url,
            visitHistory: []
        });
        await newURLShortner.save();
        // res.json({
        //     data: response.shortID
        // })
        res.redirect('/');
    } catch (error) {
        res.json({
            data: error.message
        })
    }
}

exports.url = async (req, res) => {
    try {
        const { sID } = req.params;
        const checkSID = await URL_Shortner.findOne({ shortID: sID });

        if (!checkSID) return res.json({ data: "Invalid shortID" });

        await URL_Shortner.updateOne({ shortID: sID }, {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            }
        });
        res.redirect(checkSID.redirectURL);
    } catch (error) {
        res.json({
            data: error.message
        })
    }
}

exports.urlAnalyrics = async (req, res) => {
    try {
        const { sID } = req.params;
        const checkSID = await URL_Shortner.findOne({ shortID: sID });

        if (!checkSID) return res.json({ data: "Invalid shortID" });

        res.json({
            data: {
                total_clicks: checkSID.visitHistory.length,
                timestamp: checkSID.visitHistory,
            }
        })
    } catch (error) {

    }
}