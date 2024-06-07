/**
 * Yi Yang 2024 summer.
 * Used for Network Tree SDE internship application.
 * */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());



// Handle POST request
app.post('/data', async (req, res) => {
    let data = await req.json();
    console.log("Received state: "+ data.state); // Log the request body to the console


    res.status(200).send('Data received');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
