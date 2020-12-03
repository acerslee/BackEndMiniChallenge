const mySQLpassword = require("./config");
// DO NOT ALTER THE LINE BELOW
const db = process.env.NODE_ENV === "test" ? "pets_info_test" : "pets_info";

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: mySQLpassword,
  database: `${db}`,
});

connection.connect();

// TODO: write a query to get all data from pets table
const getPetData;

// TODO: write a query to get a pet by id
const getPetById;

// TODO: write a query to create a new pet
const addPet;

// TODO: write a query to update a pet's name, type and age based on an id
const updatePetById;

// TODO: write a query to update only the pet's age by id
const updatePetAgeById;

// TODO: write a query to delete a pet by id
const deletePetById;

// don't forget to export your methods!
module.exports = {
  connection,
};
