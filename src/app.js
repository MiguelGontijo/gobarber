import express from "express";
import routes from "./router";

class App {
    constructor() {
        server = express();

        middlewares();
        routes();
    }

    middlewares() {
        server.use(express.json());
    }

    routes() {
        server.use(routes);
    }
}

export default new App().server;
