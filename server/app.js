const express = require("express");
const app = express();

app.use(express.json());

const db = require("../database/index");

// TODO: create a server route to get all the pet data
app.get;

// TODO: create a server route to get a pet by id
app.get;

// TODO: create a server route to create a new pet
app.post;

// TODO: create a server route to update a pet's name, type and age based on an id
app.put;

// TODO: create a server route to update only a pet's age based on the id (Use PATCH)
app.patch;

// TODO: create a server route to delete a pet by id
app.delete;

// DO NOT ALTER THIS LINE
module.exports = app;
