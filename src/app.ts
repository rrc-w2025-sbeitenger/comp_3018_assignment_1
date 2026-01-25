import express, {Express} from "express";
import { calculatePortfolioPerformance } from "./portfolio/portfolioPerformance";

//Initialize Express application, configuring the app before it starts.
//Express prevents endpoints from not sending a response object back. Since all endpoints must reply back.
const app: Express = express();

/*
* Represents the response structure for the health check endpoint.
*/
interface healthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

/*
* Represents the response structure for portfolio investment endpoint.
*/
export interface investment {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}

/*
* endpoint that checks server health.
* @response json of healthData.
*/
//Request object receives information from the client, response object is what the api sends back.
app.get("/api/v1/health", (req, res) => {
    //response object that matches our healthCheckResponse interface.
    const healthData: healthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0"
    }

    res.json(healthData);
});

/*
* endpoint that calculates portfolio performance from given params.
* @param - initialInvestment (number) - The starting investment value.
* @param - currentValue (number) - The current return on investment value.
* @response - json containing the full investment performance calculations.
*/
app.get("/api/v1/portfolio/performance", (req, res) => {
    //performance?initialInvestment=10000&currentValue=11000
    let investment = Number(req.query.initialInvestment);
    let value = Number(req.query.currentValue);
    
    if (!investment || !value){
        res.status(400).send(`Missing 'initial investment' or 'current value' query parameters.`);
        return;
    }

    let investmentPortfolio = calculatePortfolioPerformance(investment, value);

    res.json(investmentPortfolio);
});

export default app;