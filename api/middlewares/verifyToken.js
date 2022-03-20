const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (authHeader) {
		const token = authHeader.split(" ")[1];
		jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
			if (err) {
				return res.status(401).json({
					message: "Unauthorized",
				});
			}
			req.user = user;
			next();
		});
	} else {
		return res.status(401).json({
			message: "Unauthorized",
		});
	}
};

module.exports = verifyToken;
