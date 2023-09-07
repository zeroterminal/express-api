import express from 'express';
import usersRoutes from './routes/users.js';
import mongoose from 'mongoose';
import User from './Models/usersModel.js';
import Cors from 'cors';
import 'dotenv/config';


const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => { console.log(' ...:: database opened successfully ::...')} )

const app   = express();
const PORT  = 5000;

app.use(express.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => { res.send("homepage"); })

mongoose.connect(process.env.database).then(() => {console.log("....:: Connected to Database ::...")}).catch((err) => {console.log(err)});

let query = new User();



// let jay = new User ({
//     Username: "zero",
//     Name: "X",
//     Email: "X@zoned",
//     Password: "core-"
// });
// jay.save();
// let isa = new User ({
//     Username: "aizashi",
//     Name: "Meowabelle",
//     Email: "little_farter@gmail.com",
//     Password: "imeow@you"
// });
    
// isa.save(function(err, users) { if (err) { return console.error(err) } console.log(isa.name + " Saved to database") })
// isa.save();
app.listen(PORT, () => console.log(`server running on ${PORT}`));
