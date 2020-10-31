const express = require("express");
const app = express();
const port = 3001;

const db = require("../database/index");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// create a server route to get all the pet data
app.get("/api/pets", (req, res) => {
  db.getPetData((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
// create server route to add a new pet

// create a server route to get a pet by name

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
