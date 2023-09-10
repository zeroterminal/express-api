import express from 'express';
import usersController from './Controllers/usersController.js';
import mongoose from 'mongoose';
import 'dotenv/config';


const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => { console.log(' ...:: database opened successfully ::...')} )

const app   = express();
const PORT  = 5000;

app.use(express.json());

app.use('/users', usersController);

app.get('/', (req, res) => { res.send("homepage"); })

mongoose.connect(process.env.database).then(() => {console.log("....:: Connected to Database ::...")}).catch((err) => {console.log(err)});


app.listen(PORT, () => console.log(`server running on ${PORT}`));
