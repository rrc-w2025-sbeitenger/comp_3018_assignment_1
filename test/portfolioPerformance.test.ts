import { investment } from "src/app";
import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

//unit tests
describe("Calculate the portfolio performance function for above 30 percentage", () => {
    it("should return portfolio performance information, with 'Excellent Performance!' message", async () => {
        //arrange.
        const initialInvestment: number = 10000;
        const currentValue: number = 16000;

        //act.
        const actualData: investment = calculatePortfolioPerformance(initialInvestment, currentValue);

        //assert.
        expect(actualData.initialInvestment).toBe(10000);
        expect(actualData.currentValue).toBe(16000);
        expect(actualData.profitOrLoss).toBe(6000);
        expect(actualData.percentageChange).toBe(60);
        expect(actualData.performanceSummary).toBe("Excellent Performance! Your investments are doing great.");
    });
});

describe("Calculate the portfolio performance function for below 30 percentage", () => {
    it("should return portfolio performance object, with message of 'Solid gain'", async () => {
        //arrange.
        const initialInvestment: number = 10000;
        const currentValue: number = 11000;

        //act.
        const actualData: investment = calculatePortfolioPerformance(initialInvestment, currentValue);

        //assert.
        expect(actualData.initialInvestment).toBe(10000);
        expect(actualData.currentValue).toBe(11000);
        expect(actualData.profitOrLoss).toBe(1000);
        expect(actualData.percentageChange).toBe(10);
        expect(actualData.performanceSummary).toBe("Solid gain. Keep monitoring your investments.");
    });
});

describe("Calculate the portfolio performance function for below 10 percentage", () => {
    it("should return portfolio performance object, with a message of 'Modest gain'", async () => {
        //arrange.
        const initialInvestment: number = 10000;
        const currentValue: number = 10999.9;

        //act.
        const actualData: investment = calculatePortfolioPerformance(initialInvestment, currentValue);

        //assert.
        expect(actualData.initialInvestment).toBe(10000);
        expect(actualData.currentValue).toBe(10999.9);
        expect(actualData.profitOrLoss).toBe(999.8999999999996);
        expect(actualData.percentageChange).toBe(9.998999999999997);
        expect(actualData.performanceSummary).toBe("Modest gain. Your portfolio is growing slowly.");
    });
});

describe("Calculate the portfolio performance function for below -10", () => {
    it("should return portfolio performance information, with a message of 'Significant Loss'", async () => {
        //arrange.
        const initialInvestment: number = 10000;
        const currentValue: number = 8999.9;

        //act.
        const actualData: investment = calculatePortfolioPerformance(initialInvestment, currentValue);

        //assert.
        expect(actualData.initialInvestment).toBe(10000);
        expect(actualData.currentValue).toBe(8999.9);
        expect(actualData.profitOrLoss).toBe(-1000.1000000000004);
        expect(actualData.percentageChange).toBe(-10.001000000000005);
        expect(actualData.performanceSummary).toBe("Significant Loss. Review your portfolio strategy.");
    });
});