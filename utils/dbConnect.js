const { connect } = require('mongoose');

async function dbConnection(mongoURL) {
    connect(mongoURL, {
        bufferCommands: false, // Disable command buffering
    }).then(() => { console.log(`Database Connected`) }).catch((er) => console.log(er));
}

module.exports = dbConnection;