const express = require("express");
const cors = require("cors");
const app = express();

// express.json() is builtin express method to recognize the incoming Request Object as a JSON Object. This method is called as a middleware using the following code:
app.use(express.json());
// CORS is a node.js package for providing an express middleware that can be used to enable CORS with various options
app.use(cors());

// by requiring our database/index.js file, we get access to methods and our db connection from the exports object
const db = require("../database/index");

// create a server route to get all the pet data
app.get("/api/pets", (req, res) => {
  db.getPetData((err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(`Failed to get pet data`);
    } else {
      res.status(200).send(data);
    }
  });
});

// create a server route to get a pet by id
app.get("/api/pets/:id", (req, res) => {
  db.getPetById(req.params.id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(`Failed to get pet by id: ${req.params.id}`);
    } else {
      res.status(200).send(data);
    }
  });
});

// create a server route to create a new pet
app.post("/api/pets", (req, res) => {
  db.addPet(req.body, (err, data) => {
    if (err) {
      console.err(err);
      res.status(500).send(`Error creating new pet: ${req.body.name}`);
    } else {
      res.status(200).send(`Succesfully created new pet: ${req.body.name}`);
    }
  });
});

// create a server route to update a pet's name, type and age based on an id
app.put("/api/pets/:id", (req, res) => {
  db.updatePetById(req.body, req.params.id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(`Error updating pet by id: ${req.params.id}`);
    } else {
      res.status(200).send(data);
    }
  });
});

// create a server route to update only a pet's age based on the id (Use PATCH)
app.patch("/api/pets/:id", (req, res) => {
  db.updatePetAgeById(req.body, req.params.id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(`Error updating pet's age by id: ${req.params.id}`);
    } else {
      res
        .status(200)
        .send(`Successfully updated pet's age with id: ${req.params.id}`);
    }
  });
});

// create a server route to delete a pet by id
app.delete("/api/pets/:id", (req, res) => {
  db.deletePetById(req.params.id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(`Error deleting pet by id: ${req.params.id}`);
    } else {
      res.status(200).send(`Successfully deleted pet id: ${req.params.id}`);
    }
  });
});

module.exports = app;
