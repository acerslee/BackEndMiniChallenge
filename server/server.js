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
app.get("/api/pets", (req, res, next) => {
  db.getPetData((err, data) => {
    if (err) {
      // log the error
      console.error(err);
      let error = new Error(`Error getting pet data`);
      // next sends the error to the error handler middleware function with a generic message
      next(error);
    } else {
      res.status(200).send({ data: data, message: `Success getting all pets` });
    }
  });
});

// create a server route to get a pet by id
app.get("/api/pets/:id", (req, res, next) => {
  db.getPetById(req.params.id, (err, data) => {
    if (err) {
      console.error(err);
      let error = new Error(`Error getting pet by id: ${req.params.id}`);
      next(error);
    } else {
      res
        .status(200)
        .send({ data: data, message: `Success getting pet by id` });
    }
  });
});

// create a server route to create a new pet
app.post("/api/pets", (req, res, next) => {
  db.addPet(req.body, (err, data) => {
    if (err) {
      console.err(err);
      let error = new Error(`Error creating new pet: ${req.body.name}`);
      next(err);
    } else {
      res
        .status(200)
        .send({ message: `Succesfully created new pet: ${req.body.name}` });
    }
  });
});

// create a server route to update a pet's name, type and age based on an id
app.put("/api/pets/:id", (req, res) => {
  db.updatePetById(req.body, req.params.id, (err, data) => {
    if (err) {
      console.error(err);
      let error = new Error(`Error updating pet by id: ${req.params.id}`);
      next(error);
    } else {
      res.status(200).send({
        message: `Successfully updated pet with id: ${req.params.id}`,
      });
    }
  });
});

// create a server route to update only a pet's age based on the id (Use PATCH)
app.patch("/api/pets/:id", (req, res) => {
  db.updatePetAgeById(req.body, req.params.id, (err, data) => {
    if (err) {
      console.error(err);
      let error = new Error(`Error updating pet's age by id: ${req.params.id}`);
      next(error);
    } else {
      res.status(200).send({
        message: `Successfully updated pet's age with id: ${req.params.id}`,
      });
    }
  });
});

// create a server route to delete a pet by id
app.delete("/api/pets/:id", (req, res, next) => {
  db.deletePetById(req.params.id, (err, data) => {
    if (err) {
      console.error(err);
      let error = new Error(`Error deleting pet by id: ${req.params.id}`);
      next(error);
    } else {
      res
        .status(200)
        .send({ message: `Successfully deleted pet id: ${req.params.id}` });
    }
  });
});

// error handler middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || "Internal Server Error",
    },
  });
});

// binds and listens to the connection son the specified host and port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// what are express.json() and express.urlencoded()? : https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded/51844327#:~:text=a.-,express.,use(express.
