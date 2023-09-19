import router from './router/api.js';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import 'dotenv/config';
import db from './database.js';


db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => { console.log(' ...:: database opened successfully ::...') })

const app = express();
const PORT = 5000;

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/users', router);

app.get('/', (req, res) => { res.json("HOME PAGE") })

app.listen(PORT, () => console.log(`server running on ${PORT}`));