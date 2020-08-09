const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
	const url =
		"https://sv443.net/jokeapi/v2/joke/Programming?format=txt&type=single";
	// res.send("Successfull");
	https.get(url, function (response) {
		console.log(response.statusCode);
		response.on("data", function (data) {
			// const jokeData = JSON.parse(data);
			res.write("<h1>Joke is </h1>" + data);
			res.send();
		});
	});
});

app.listen(3000, function () {
	console.log("Jaa... jaa kr port 3000 pe dekh insaan aaya hai ki bhagwan");
});
