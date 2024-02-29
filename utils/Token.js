const jwt = require('jsonwebtoken');

exports.signToken = (user) => {
    return jwt.sign({ id: user._id, email: user.email , role: user.role }, process.env.SECRET)
}

exports.verifyToken = (token) => {
    return jwt.verify(token, process.env.SECRET); // return -> jwt-payload(id,email);
}