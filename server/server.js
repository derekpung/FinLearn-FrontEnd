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

app.get("/user/by-uid", (req, res) => {
  db.query(
    `select id from user where id = '${req.query.uid}'`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
        res.status(500).send("uid error occurred");
      } else {
        res.status(200).send(results);
      }
    }
  );
});


app.post("/user/add", (req, res) => {
    const id= req.body.id;
    const name= req.body.name;
    const email= req.body.email;
    const signup= req.body.signup;
    const signup_timestamp = signup.substring(0, 10) + ' ' + signup.substring(11, 19);
    const verified= req.body.verified;

    const sqlInsert = 
        "insert into user (id,name,email,signup,verified,wallet) values (?,?,?,?,?,'0')";
  
    db.query(sqlInsert, [id,name,email,signup_timestamp,verified],
        (errors, results) => {
            if (errors) {
                console.log(errors);
                res.status(500).send("Some internal error occurred");
            } else {
                res.status(200).send("Successfully added the user");
            }
        }
    );
});

app.listen(3002, () => {
    console.log("running on port 3002");
});