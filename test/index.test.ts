import {describe, expect, it} from '@jest/globals';
const request = require("supertest")
const baseUrl = "http://localhost:8000"

describe("GET /", () => {
    it("should return 200", async () => {
        const response = await request(baseUrl).get("/");
        // console.log(response)
        expect(response.statusCode).toBe(200);
        // expect(response.statusCode).toBe(500);
      });
})

describe("POST /", () => {
    it("should return 404", async () => {
        const response = await request(baseUrl).post("/");
        // console.log(response)
        expect(response.statusCode).toBe(404);
        // expect(response.statusCode).toBe(500);
      });
})

describe("POST /", () => {
    it("should return 404", async () => {
        const response = await request(baseUrl).post("/");
        // console.log(response)
        expect(response.statusCode).toBe(404);
        // expect(response.statusCode).toBe(500);
      });
})

describe("PUT /", () => {
    it("should return 404", async () => {
        const response = await request(baseUrl).put("/");
        // console.log(response)
        expect(response.statusCode).toBe(404);
        // expect(response.statusCode).toBe(500);
      });
})

describe("DELETE /", () => {
    it("should return 404", async () => {
        const response = await request(baseUrl).delete("/");
        // console.log(response)
        expect(response.statusCode).toBe(404);
        // expect(response.statusCode).toBe(500);
      });
})