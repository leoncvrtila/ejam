import request from "supertest";
import app from "../app";

describe("Superheroes API", () => {
  it("GET /superheroes should return an empty array initially", async () => {
    const response = await request(app).get("/superheroes");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it("POST /superheroes should create a superhero", async () => {
    const newHero = {
      name: "Batman",
      superpower: "Intelligence",
      humilityScore: 10,
    };

    const response = await request(app).post("/superheroes").send(newHero);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newHero);
  });

  it("POST /superheroes should validate missing fields", async () => {
    const response = await request(app).post("/superheroes").send({
      superpower: "Flight",
      humilityScore: 8,
    });

    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors[0].msg).toBe(response.body.errors[0].msg);
  });

  it("GET /superheroes should return superheroes after creation", async () => {
    const response = await request(app).get("/superheroes");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
