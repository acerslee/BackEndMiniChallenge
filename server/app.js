const express = require("express");
const bodyparser = require('body-parser');
const cors = require("cors");

const app = express();

app.use(express.json();
app.use(cors());

const db = require("../database/index");

// TODO: create a server route to get all the pet data
app.get('/api/pets', (req,res) => {
  console.log('testing route');
  db.getPetData((err, data) => {
    if (err) {
      throw(err);
    } else {
      res.status(200).send(data);
    }
  })
});
// TODO: create a server route to get a pet by id
app.get('/api/pets/:id', (req, res) => {
  db.getPetDataById(req.params, (err, data) => {
    if (err) {
      throw err
    } else {
      res.status(200).send(data);
    }
  })
});

// TODO: create a server route to create a new pet
app.post('/api/pets', (req, res) => {
  db.addPet(req.body, (err,data) => {
    if (err) {
      throw err
    } else {
      res.status(201).send(data);
    }
  })
});
// TODO: create a server route to update a pet's name, type and age based on an id
app.put('/api/pets/:id', (req, res) => {
  db.updatePetById(req.params, req.body, (err,data) => {
    if (err) {
      throw err
    } else {
      res.status(200).send(data):
    }
  })
});

// TODO: create a server route to update only a pet's age based on the id (Use PATCH)
app.patch('/api/pets/:id', (req, res) => {
  db.updatePetAgeById(req.params, req.body, (err, data) => {
    if (err) {
      throw err
    } else {
      res.status(200).send(data);
    }
  })
});

// TODO: create a server route to delete a pet by id
app.delete('/api/pets', (req, res) => {
  db.deletePetById(req.params, (err,data) => {
    if (err) {
      throw err
    } else {
      res.status(200).send(data);
    }
  })
});
// DO NOT ALTER THIS LINE
module.exports = app;
