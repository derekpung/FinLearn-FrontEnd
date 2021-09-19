const mysql = require('mysql')
const db = mysql.createConnection({
host: `${process.env.REACT_APP_DBHOST}`,
user: `${process.env.REACT_APP_DBUSER}`,
password: `${process.env.REACT_APP_DBPASSWD}`,
database: `${process.env.REACT_APP_DBNAME}` 
})

db.connect((errors) => {
    if (errors) {
        console.log("Couldn't connect to the MySQL Server. Error: " + errors);
    } else {
        console.log("Connected to MySQL successfully!");
    }
});

module.exports = db;