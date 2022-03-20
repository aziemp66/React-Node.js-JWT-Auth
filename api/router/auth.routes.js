const router = require("express").Router();
const User = require("../model/user.model");

router.post("/register", (req, res) => {
	const { username, password } = req.body;
	const user = new User({ username, password });
	user.save()
		.then(() => res.sendStatus(200))
		.catch((err) => res.status(400).json(err));
});

module.exports = router;
