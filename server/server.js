// open another terminal and execute "npm run devStart" at the directory containing server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const dotenv = require("dotenv").config();

const db = mysql.createPool({
    host: `${process.env.DBHOST}`,
    port: process.env.DBPORT,
    user: `${process.env.DBUSER}`,
    password: `${process.env.DBPASSWD}`,
    database: `${process.env.DBNAME}`,
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/course/all', (req, res) => {
    db.query("SELECT * FROM course;", (err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send("some internal error occurred");
        }
        else{
            res.status(200).send(result);
        }    
    });
});

app.listen(3002, () => {
    console.log("running on port 3002");
});