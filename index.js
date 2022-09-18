const express = require('express');
const app = express();
const Port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();

// router import
const hellowRoute = require('./router/v1/hellow.route');

// add meddileware
app.use(cors());
app.use(express.json());

// create a route
app.use('/', hellowRoute);

// page Not found
app.use('*', (req, res) => {
	const { baseUrl } = req;
	res.send(`<h1>${baseUrl} Route Not Found!!!</h1>`);
});

// app listen
app.listen(Port, () => {
	console.log(`Assinment 1 server is running: ${Port}`);
});
