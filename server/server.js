const express = require("express");
const app = express();
const port = 3001;

// express.json() is builtin express method to recognize the incoming Request Object as a JSON Object. This method is called as a middleware using the following code:
app.use(express.json());

// by requiring our database/index.js file, we get access to methods and our db connection from the exports object
const db = require("../database/index");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// create a server route to get all the pet data
app.get("/api/pets", (req, res) => {
  db.getPetData((err, data) => {
    if (err) {
      res.status(400).send(err);
      console.log(`Error getting pet data: ${err}`);
    } else {
      res.status(200).send(data);
    }
  });
});

// create a server route to get a pet by id
app.get("/api/pets/:id", (req, res) => {
  db.getPetById(req.params.id, (err, data) => {
    if (err) {
      res.status(400).send(err);
      console.log(`Error getting pet by id: ${err}`);
    } else {
      res.status(200).send(data);
    }
  });
});

// create a server route to create a new pet
app.post("/api/pets", (req, res) => {
  db.addPet(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
      console.log(`Error adding new pet: ${err}`);
    } else {
      res.status(200).send(data);
    }
  });
});

// create a server route to update a pet's name, type and age based on an id
app.put("/api/pets/:id", (req, res) => {
  db.updatePetById(req.body, req.params.id, (err, data) => {
    if (err) {
      res.status(400).send(err);
      console.log(`Error updating pet by id: ${err}`);
    } else {
      res.status(200).send(data);
    }
  });
});

// create a server route to delete a pet by id
app.delete("/api/pets/:id", (req, res) => {
  db.deletePetById(req.params.id, (err, data) => {
    if (err) {
      res.status(400).send(err);
      console.log(err);
      // console.log(`Error deleting pet by id: ${err}`);
    } else {
      res.status(200).send(data);
    }
  });
});

// binds and listens to the connection son the specified host and port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// what are express.json() and express.urlencoded()? : https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded/51844327#:~:text=a.-,express.,use(express.
