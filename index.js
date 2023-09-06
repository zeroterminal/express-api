import express from 'express';
import usersRoutes from './routes/users.js';
import mongoose from 'mongoose';
import UsersSchema from './Models/schema.js';
import 'dotenv/config';

mongoose.connect(`${process.env.database}`, { useNewUrlParser: true })
const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.error(error))


const app   = express();
const PORT  = 5000;


app.use(express.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => { res.send("homepage"); })

app.listen(PORT, () => console.log(`server running on ${PORT}`));