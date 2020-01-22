const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

let app = express();
app.use(cors());
app.use(bodyParser.json());

var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Password1",
    database : "database"
});

mysqlConnection.connect((err)=>{
    if(err) throw err;
    console.log('Connected');
});

app.listen(3000);