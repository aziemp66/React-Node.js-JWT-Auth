const router = require("express").Router();
const User = require("../model/user.model");

router.post("/register", (req, res) => {
	const { username, password } = req.body;
	const user = new User({ username, password });
	user.save().catch((err) => res.status(400).json(err));

	res.status(201).json({
		message: "User created successfully",
	});
});

router.post("/login", (req, res) => {
	const { username, password } = req.body;
	User.findOne({ username })
		.then((user) => {
			if (!user) {
				return res.status(401).json({
					message: "User not found",
				});
			}
			if (user.password !== password) {
				return res.status(401).json({
					message: "Wrong password",
				});
			}
			res.status(200).json({
				message: "User logged in successfully",
			});
		})
		.catch((err) => res.status(400).json(err));
});

module.exports = router;
