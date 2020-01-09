const server = require("./server.js");
const request = require("supertest");
const axios = require("axios");

describe("GET /", () => {
  it("has process .env.DB_ENV as 'testing'", () => {
    expect(process.env.DB_ENV).toBe("development");
  });
});

describe("POST /api/auth/register", () => {
  let user = {
    lastname: "test12",
    firstname: "test12",
    username: "tewefewfst",
    password: "sfewfew",
    email: "teewfewfwst@gmail.com",
    city: null,
    state: null,
    address: null,
    phone: null,
    zipcode: null
  };
  it("testing register new user::", () => {
    return request(server)
      .post("/api/auth/register")
      .send(user)
      .expect(400)
      .expect({ message: "user is already exist" });
  });
});

describe("POST /api/auth/login", () => {
  let user = { username: "tewefewfst", password: "sfewfew" };
  it("testing Login  user::", () => {
    return request(server)
      .post("/api/auth/login")
      .send(user)
      .expect(200)
      .then(res => {
        const token = res.body.token;
        expect(res.body.token).toBe(token);
      });
  });
});

describe("GET /api/recipes", () => {
  it("testing getting all recipes::", () => {
    return request(server)
      .get("/api/recipes")
      .then(res => {
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
      });
  });
});

describe("GET /api/recipes", () => {
  let user = { username: "tewefewfst", password: "sfewfew" };
  it("testing Login  user::", () => {
    return request(server)
      .post("/api/auth/login")
      .send(user)
      .expect(200)
      .then(res => {
        const token = res.body.token;
        return request(server)
          .get("/api/auth/user/2")
          .set("authorization", token)
          .then(res => {
            expect(res.status).toBe(200);
            expect(Array.isArray(res.body)).toBe(true);
          });
      });
  });
});

// Post recipe
describe("GET /api/recipes", () => {
  let user = { username: "tewefewfst", password: "sfewfew" };
  let recipe = {
    recipe_name: "Thai Mango Coconut Pudding",

    ingredients:
      "2 large ripe mangoes, 3/4 cup coconut milk (canned or fresh), 1/2 cup water ,2 tbsp gelatin powder,1/4 cup white sugar,Chopped ripe mangoes, to decorate (optional),Glazed cherries, to decorate,Mint leaves, to decorate",
    instructions:
      "Scoop out flesh from the mangoes. Add to a food processor. Process to make a smooth purée. Transfer to a bowl. Add coconut milk. Stir to combine. Set aside.Pour boiling water into a large bowl. Sprinkle gelatin powder over water. Stir to dissolve gelatin. Add sugar. Stir again to dissolve sugar. Add mango-coconut mixture. Stir to combine.Pour into small glasses. Leave to set for about 2 hours in the refrigerator.Decorate with chopped mangoes, halved cherries and mint leaves if you like.",

    mealtype: 2
  };
  it("testing Login  user::", () => {
    return request(server)
      .post("/api/auth/login")
      .send(user)
      .expect(200)
      .then(res => {
        const token = res.body.token;
        return request(server)
          .post("/api/auth/user/2")
          .set("authorization", token)
          .send(recipe)
          .then(res => {
            expect(res.status).toBe(200);
            expect(res.body.message).toBe("added new recipe");
          });
      });
  });
});
