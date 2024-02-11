//import modules
import express from 'express'
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

// Sometimes it work when ./env or sometimes in ./.env developer need to check for their own
dotenv.config({
    path: './.env'
})

//app
const app = express();

//database


//middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

//routes

console.log(process.env.PORT)
//port
const port = process.env.PORT || 8080;


//listener
const server = app.listen(port, () =>
    console.log(`Server is running on port ${port}`)
);

app.get('/',(req,res)=>{
    res.send("Testing Backend")

})