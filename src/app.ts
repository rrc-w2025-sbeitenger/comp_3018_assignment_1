import express, {Express} from "express";

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

//Define a route.
//Request object receives information from the client, response object is what the api sends back.
app.get("/src/api/v1/routes", (req, res) => {
    //response object that matches our healthCheckResponse interface.
    const healthData: healthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0"
    }

    res.json(healthData);
});

//export app to use within server.ts.
export default app;