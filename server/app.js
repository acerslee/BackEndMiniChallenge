const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("../database/index");

// TODO: create a server route to get all the pet data

// TODO: create a server route to get a pet by id

// TODO: create a server route to create a new pet

// TODO: create a server route to update a pet's name, type and age based on an id

// TODO: create a server route to update only a pet's age based on the id (Use PATCH)

// TODO: create a server route to delete a pet by id

// DO NOT ALTER THIS LINE
module.exports = app;
