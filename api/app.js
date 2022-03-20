require("dotenv").config();

const express = require("express");
const connect = require("./data/database");

const authRoutes = require("./router/auth.routes");

const app = express();

app.use(express.json());

app.use(authRoutes);

connect().then(() => {
	app.listen(process.env.PORT || 3000, () => {
		console.log("Server started");
	});
});
