const express = require('express');
const app = express();
const Port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();

// add meddileware
app.use(cors());
app.use(express.json());

app.listen(Port, () => {
	console.log(`Assinment 1 server is running: ${Port}`);
});
