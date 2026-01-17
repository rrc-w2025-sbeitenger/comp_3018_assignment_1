import request from "supertest";
import app from "../src/app";

describe("GET /src/api/v1/routes", () => {
    it("should return OK status", async () => {
        //act
        const response = await request(app).get("/src/api/v1/routes");

        //assert
        expect(response.body.status).toBe("OK");
    });

    it("should return a JSON response with correct fields", async () => {
        //act
        const response = await request(app).get("/src/api/v1/routes");

        //assert
        expect(response.body).toHaveProperty("status");
        expect(response.body).toHaveProperty("uptime");
        expect(response.body).toHaveProperty("timestamp");
        expect(response.body).toHaveProperty("version");
    })
});