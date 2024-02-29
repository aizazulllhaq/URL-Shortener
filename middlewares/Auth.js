const { verifyToken } = require("../utils/Token");

exports.checkAuthenticatedUser = (req, res, next) => {
    const { token } = req.cookies;

    req.user = null;

    if (!token) return next();

    try {
        const user = verifyToken(token);

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ msg: "Invalid Token" });
    }
}

exports.restrictTo = (role = []) => {
    return (req, res, next) => {

        if (!req.user) return res.json({ msg: "Please First Login" });

        if (!role.includes(req.user.role)) return res.json({ msg: "Role Must be Present" });

        next();
    }
}