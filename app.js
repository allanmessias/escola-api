import dotenv from 'dotenv';

import './src/database/connection';

dotenv.config();

import express from 'express';
import homeRoute from './src/routes/homeRoute';
import userRoute from './src/routes/userRoute';

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', homeRoute);
        this.app.use('/users/', userRoute);
    }
}

export default new App().app;