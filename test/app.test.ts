import request, { Response } from "supertest";
import app from "../src/app";

describe("GET /api/v1/health", () => {
    it("should return server health status", async () => {
        //arrange
        const response: Response = await request(app).get("/api/v1/health");

        //assert
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("OK");
        expect(response.body).toHaveProperty("uptime");
        expect(response.body).toHaveProperty("timestamp");
        expect(response.body).toHaveProperty("version");
    });
});

describe("GET /api/v1/portfolio/performance", () => {
    it("should return a valid json of the calculated portfolio performance", async () => {
        //arrange
        const response: Response = (await request(app).get("/api/v1/portfolio/performance?initialInvestment=10000&currentValue=16000"));

        //assert
        expect(response.status).toBe(200);
        expect(response.body.initialInvestment).toBe(10000);
        expect(response.body.currentValue).toBe(16000);
        expect(response.body.profitOrLoss).toBe(6000);
        expect(response.body.percentageChange).toBe(60);
        expect(response.body.performanceSummary).toBe("Excellent Performance! Your investments are doing great.");

    });
});