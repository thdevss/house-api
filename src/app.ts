import express, { Application, Request, Response } from 'express'
import homeRoute from './route/homeRoute'
import postCodeRoute from './route/postCodeRoute'
import "reflect-metadata";
import {createConnection} from "typeorm";
import cors from 'cors';
import bodyParser from 'body-parser';

const options: cors.CorsOptions = {
    origin: '*'
};
createConnection().then(async connection => {

    const app: Application = express()
    app.use(cors(options))
    app.use(bodyParser.json())
    app.use('/home', homeRoute)
    app.use('/postCode', postCodeRoute)

    app.listen(3000);

})