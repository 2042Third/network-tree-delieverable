/**
 * Yi Yang 2024 summer.
 * Used for Network Tree SDE internship application.
 * */

const { states_db } = require('./db.js');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

let states_set = new Set();

// Middleware to parse JSON bodies
app.use(bodyParser.json());


// Handle POST request
app.post('/data', async (req, res) => {
    let data = await req.body;
    console.log("Received state: "+ data.state); // Log the request body to the console


    res.status(200).send(
      JSON.stringify({
          state: data.state,
          status: "success",
          message: states_set.has(data.state)?"Input state exists in the database.": "Input state doesn't exist in the database",
      })
    );
});

// Handle POST request to 'states' endpoint
app.post('/states', async (req, res) => {
    let data = await req.body;
    console.log("Sending all states.");
    res.status(200).send(
      JSON.stringify({
          states : states_db,
      })
    );
});

const init = async () => {
  states_set = new Set(states_db);
};

// Start the server
init()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch(console.error);
