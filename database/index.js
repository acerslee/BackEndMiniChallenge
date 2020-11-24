// connect to MySQL database
const mySQLpassword = require("./config");

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: mySQLpassword,
  database: "pets_info",
});

connection.connect();

// test connection
connection.query("SELECT 1 + 1 AS solution", function (err, rows, fields) {
  if (err) throw err;
  console.log("The solution is: ", rows[0].solution);
});

// write a query to get all data from pets table
const getPetData = (cb) => {
  connection.query(`SELECT * FROM pets`, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

// write a query to get a pet by id
const getPetById = (id, cb) => {
  connection.query(`SELECT * FROM pets WHERE id = ?`, [id], (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

// write a query to create a new pet
const addPet = (petInfo, cb) => {
  connection.query(
    `INSERT INTO pets (name, type, age) VALUES (?, ?, ?)`,
    [petInfo.name, petInfo.type, petInfo.age],
    (err, results) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, results);
      }
    }
  );
};

// write a query to update a pet's name, type and age based on an id
const updatePetById = (updateData, id, cb) => {
  connection.query(
    `UPDATE pets SET name=?, type=?, age=? WHERE id = ?`,
    [updateData.name, updateData.type, updateData.age, id],
    (err, results) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, results);
      }
    }
  );
};

// don't forget to export your methods!
module.exports = {
  connection,
  getPetData,
  getPetById,
  addPet,
  updatePetById,
};
