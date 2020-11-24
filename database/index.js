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

// write a query to create a new pet row

module.exports = {
  connection,
  getPetData,
  getPetById,
};
