process.env.NODE_ENV = "test";
const db = require("../database");

const app = require("../server/app");
const supertest = require("supertest");

beforeAll(async () => {
  await db.connection.query(`CREATE TABLE IF NOT EXISTS pets (
  id SERIAL PRIMARY KEY,
  name varchar(50),
  type varchar(50),
  age integer
)`);
});

beforeEach(async () => {
  await db.connection.query(
    `INSERT INTO pets (name, type, age) VALUES ("Grumpy Cat", "Cat", 10)`
  );
});

afterEach(async () => {
  await db.connection.query("DELETE FROM pets");
});

afterAll(async () => {
  await db.connection.query("DROP TABLE IF EXISTS pets");
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
});

describe("GET /api/pets/:id ", () => {
  test("It should respond with a single pet by id", async () => {
    const newPet = await supertest(app).post("/api/pets").send({
      name: "Bob Barker",
      type: "Dog",
      age: 4,
    });

    await supertest(app)
      .get("/api/pets/" + 3)
      .expect(200)
      .then((response) => {
        expect(response.body.name).toBe(newPet.name);
        expect(response.body.length).toBe(1);
      });
  });
});

describe("POST /api/pets", () => {
  test("It should add a new pet to the database", async () => {
    const newPet = await supertest(app).post("/api/pets").send({
      name: "Mary Puppins",
      type: "Dog",
      age: 5,
    });

    await supertest(app)
      .get("/api/pets")
      .expect(200)
      .then((response) => {
        expect(response.body.length).toBe(2);
      });
  });
});

describe("PUT /api/pets/:id", () => {
  test("It should update a pet by id", async () => {
    const newPet = await supertest(app).post("/api/pets").send({
      name: "Cindy Pawford",
      type: "Kitten",
      age: 1,
    });

    const updateNewPet = {
      name: "Cindy Clawford",
      type: "Cat",
      age: 2,
    };

    await supertest(app)
      .put("/api/pets/" + 7)
      .send(updateNewPet)
      .expect(200)
      .then(async () => {
        const response = await supertest(app).get("/api/pets/" + 7);
        expect(response.body[0].name).toBe("Cindy Clawford");
        expect(response.body[0].type).toBe("Cat");
        expect(response.body[0].age).toBe(2);
      });
  });
});

describe("PATCH /api/pets/:id", () => {
  test("It should update a pet by id", async () => {
    const newPet = await supertest(app).post("/api/pets").send({
      name: "Napoleon Bunnyparte",
      type: "Bunny",
      age: 1,
    });

    const newAge = {
      age: 4,
    };

    await supertest(app)
      .patch("/api/pets/" + 9)
      .send(newAge)
      .expect(200)
      .then(async () => {
        const response = await supertest(app).get("/api/pets/" + 9);
        expect(response.body[0].age).toBe(4);
      });
  });
});

describe("DELETE /api/pets", () => {
  test("It should delete a pet by id", async () => {
    const newPet = await supertest(app).post("/api/pets").send({
      name: "Bubba Gump",
      type: "Fish",
      age: 3,
    });

    const removedPet = await supertest(app)
      .delete("/api/pets/" + 11)
      .expect(200)
      .then(async () => {
        const response = await supertest(app).get("/api/pets");
        expect(response.body[0].age).toBe(10);
      });
  });
});
