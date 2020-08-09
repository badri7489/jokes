const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
	const category = req.body.category;
	const type = req.body.type;
	const blacklistFlags = req.body.blacklistFlags;
	const url =
		"https://sv443.net/jokeapi/v2/joke/" +
		category +
		"?type=" +
		type +
		"&blacklistFlags=" +
		blacklistFlags +
		"&format=txt";
	https.get(url, function (response) {
		console.log(response.statusCode);
		response.on("data", function (data) {
			console.log(url);
			res.write("<h1>Joke is </h1>" + data);
			res.send();
		});
	});
});

app.listen(3000, function () {
	console.log("Jaa... jaa kr port 3000 pe dekh insaan aaya hai ki bhagwan");
});
