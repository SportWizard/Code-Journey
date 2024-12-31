const express = require("express");
const mysql = require("mysql");
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Root1234",
    database: ""
})

app.listen(5173, () => {
    console.log("Connected");
});