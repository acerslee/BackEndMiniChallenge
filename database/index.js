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
const getPetData = (callback) => {
  connection.query('SELECT * FROM pets', (err, data) => {
    if (err) {
      console.log(err, 'not getting any pets');
    } else {
      callback(data);
    }
  })
};

// TODO: write a query to get a pet by id
const getPetById = (petParams, callback) => {
  connection.query ('SELECT * FROM pets WHERE id = ?', [petParams.id] , (err, data) => {
  if (err){
    callback(err)
  } else {
    callback(data)
    }
  })
};

// TODO: write a query to create a new pet
const addPet = (petData, callback) => {
  connection.query('INSERT INTO pets (name, type, age) VALUES (?, ?, ?)', [petData.name, petData.type, petData.age], (err,data) => {
    if (err) {
      callback(err);
    } else {
      callback(data)
    }
  })
};

// TODO: write a query to update a pet's name, type and age based on an id
const updatePetById = (petParams, petData, callback) => {
  connection.query('UPDATE pets SET name = ?, type = ?, age = ? WHERE id = ?', [petParams.id, petData.name, petData.type, petData.age], (err,data) => {
    if (err) {
      callback(err);
    } else {
      callback(data);
    }
  })
};

// TODO: write a query to update only the pet's age by id
const updatePetAgeById = (petParams, petData, callback) => {
  connection.query('UPDATE pets SET age = ? WHERE id = ?', [petParams.id, petData.age], (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(data);
    }
  })
};

// TODO: write a query to delete a pet by id
const deletePetById = (petParams, callback) => {
  connection.query('DELETE FROM pets WHERE id = ?', [petParams.id], (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(data);
    }
  })
};

// don't forget to export your methods!
// NOTE: the connection is being exported for testing purposes only and has nothing to do with the functionality of the application
module.exports = {
  getPetData,
  getPetById,
  addPet,
  updatePetById,
  updatePetAgeById,
  deletePetById
};
