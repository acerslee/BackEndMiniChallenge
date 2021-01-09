const mysql = require("mysql");
// connect to MySQL database
const mySQLpassword = require("./config");
const db = process.env.NODE_ENV === "test" ? "pets_info_test" : "pets_info";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: mySQLpassword,
  database: `${db}`,
});

connection.connect();

// test connection
// connection.query("SELECT 1 + 1 AS solution", function (err, rows, fields) {
//   if (err) throw err;
//   console.log("The solution is: ", rows[0].solution);
// });

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
const addPet = ({ petInfo }, cb) => {
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

// write a query to update only the pet's age by id
const updatePetAgeById = (petAge, id, cb) => {
  connection.query(
    `UPDATE pets SET age=? WHERE id = ?`,
    [petAge.age, id],
    (err, results) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, results);
      }
    }
  );
};

// write a query to delete a pet by id
const deletePetById = (id, cb) => {
  connection.query(`DELETE FROM pets WHERE id = ?`, [id], (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

// don't forget to export your connection and methods!

// NOTE: the connection is being exported for testing purposes only and has nothing to do with the functionality of the application
module.exports = {
  connection,
  getPetData,
  getPetById,
  addPet,
  updatePetById,
  updatePetAgeById,
  deletePetById,
};
