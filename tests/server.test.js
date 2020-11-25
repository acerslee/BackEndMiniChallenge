const app = require("../server/app");
const supertest = require("supertest");

describe("GET /api/pets ", () => {
  test("It should respond with an array of all pets", async () => {
    const response = await supertest(app).get("/api/pets");
    expect(response.body).toEqual([
      {
        id: 1,
        name: "Oliver",
        type: "Dog",
        age: 1,
      },
      {
        id: 2,
        name: "Tucker",
        type: "Dog",
        age: 1,
      },
      {
        id: 3,
        name: "Montey",
        type: "Cat",
        age: 3,
      },
      {
        id: 4,
        name: "Bull",
        type: "Horse",
        age: 6,
      },
      {
        id: 5,
        name: "Mochi",
        type: "Bird",
        age: 3,
      },
      {
        id: 6,
        name: "Buttons",
        type: "Dog",
        age: 8,
      },
      {
        id: 7,
        name: "Jessie",
        type: "Dog",
        age: 1,
      },
      {
        id: 8,
        name: "Bob",
        type: "Guinea Pig",
        age: 4,
      },
      {
        id: 9,
        name: "Thumper",
        type: "Bunny",
        age: 5,
      },
      {
        id: 10,
        name: "Lily",
        type: "Bunny",
        age: 4,
      },
      {
        id: 11,
        name: "Nemo",
        type: "Fish",
        age: 3,
      },
      {
        id: 12,
        name: "Marlin",
        type: "Fish",
        age: 38,
      },
      {
        id: 13,
        name: "Crush",
        type: "Turtle",
        age: 70,
      },
      {
        id: 14,
        name: "Sheldon",
        type: "Tortoise",
        age: 190,
      },
      {
        id: 15,
        name: "Sonic",
        type: "Hedgehog",
        age: 14,
      },
    ]);
    expect(response.body.length).toEqual(15);
    expect(response.statusCode).toBe(200);
  });

  describe("GET /api/pets/:id ", () => {
    test("It should respond with a single pet by id", async () => {
      const response = await supertest(app).get("/api/pets/1");
      expect(response.body).toEqual([
        {
          id: 1,
          name: "Oliver",
          type: "Dog",
          age: 1,
        },
      ]);
      expect(response.body.length).toEqual(1);
      expect(response.statusCode).toBe(200);
    });
  });

  // describe("POST /api/pets", () => {
  //   test("It should add a new pet to the database", async () => {
  //     const newPet = await supertest(app).post("/api/pets").send({
  //       name: "Snoopy",
  //       type: "Dog",
  //       age: 5,
  //     });
  //     // make sure we add it correctly
  //     expect(newPet.body).toHaveProperty("id");
  //     expect(newPet.body.name).toBe("Snoopy");
  //     expect(newStudent.statusCode).toBe(200);

  //     // make sure we have 3 students now
  //     const response = await request(app).get("/api/pets");
  //     expect(response.body.length).toBe(16);
  //   });
  // });
});
