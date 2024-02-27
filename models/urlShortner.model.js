const { Schema, model } = require('mongoose');

const urlShortnerSchema = new Schema({
    shortID: {
        type: String,
        required: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitHistory: [
        {
            timestamp: {
                type: Number
            }
        }
    ]
}, {
    timestamps: true
});

exports.URL_Shortner = model("URL_Shortner", urlShortnerSchema);