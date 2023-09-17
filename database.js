import mongoose from "mongoose";
import 'dotenv/config';

mongoose.connect(process.env.database).then(() => { console.log("....:: Connected to Database ::...") }).catch((err) => { console.log(err) });

const db = mongoose.connection;

export default db;