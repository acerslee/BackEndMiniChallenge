process.env.NODE_ENV = "test";
const db = require("../database");

const app = require("../server/app");
const supertest = require("supertest");

// set up & teardown
beforeAll(async () => {
  await db.connection.query(`CREATE TABLE IF NOT EXISTS pets (
  id integer AUTO_INCREMENT UNIQUE PRIMARY KEY,
  name varchar(50),
  type varchar(50),
  age integer
)`);
});

// set up & tear down for tests
beforeEach(async () => {
  await db.connection.query(
    `INSERT INTO pets (name, type, age) VALUES ("Grumpy Cat", "Cat", 10)`
  );
});

afterEach(async () => {
  await db.connection.query("DELETE FROM pets");
});

afterAll(async () => {
  await db.connection.query("DROP TABLE pets");
  db.connection.end();
});

describe("GET /api/pets ", () => {
  test("It should respond with an array of all pets", async () => {
    const response = await supertest(app).get("/api/pets");
    expect(response.body).toEqual([
      {
        id: 1,
        name: "Grumpy Cat",
        type: "Cat",
        age: 10,
      },
    ]);
    expect(response.body.length).toEqual(1);
    expect(response.statusCode).toBe(200);
  });

  // describe("GET /api/pets/:id ", () => {
  //   test("It should respond with a single pet by id", async () => {
  //     const response = await supertest(app).get("/api/pets/1");
  //     expect(response.body).toEqual([
  //       {
  //         id: 1,
  //         name: "Oliver",
  //         type: "Dog",
  //         age: 1,
  //       },
  //     ]);
  //     expect(response.body.length).toEqual(1);
  //     expect(response.statusCode).toBe(200);
  //   });
  // });

  // describe("POST /api/pets", () => {
  //   test("It should add a new pet to the database", async () => {
  //     const newPet = await supertest(app).post("/api/pets").send({
  //       name: "Snoopy",
  //       type: "Dog",
  //       age: 5,
  //     });

  //     expect(newPet.statusCode).toBe(200);

  //     const response = await supertest(app).get("/api/pets");
  //     expect(response.body.length).toBe(16);
  //   });
  // });

  // describe("PUT /api/pets/:id", () => {
  //   test("It should update a pet by id", async () => {
  //     const updatedPet = await supertest(app).put("/api/pets/1").send({
  //       name: "Bruce",
  //       type: "Dog",
  //       age: 2,
  //     });
  //   });
  //   expect(updatedPet.statusCode).toBe(200);
  //   const response = supertest(app).get("/api/pets");
  //   expect(response.body.length).toBe(16);
  // });
});
