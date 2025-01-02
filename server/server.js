const express = require("express");
const mysql = require("mysql2");
require('dotenv').config();
const cors = require("cors");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "code_journey"
});

app.listen(PORT, () => {
    console.log(`Connected to ${PORT}`);
});

app.get("/road-map/main", (req, res) => {
    const query = "SELECT courses.name, courses.tier FROM courses WHERE courses.type = \"M\" ORDER BY courses.tier";
    
    db.query(query, (err, data) => {
        if (err) {
            console.log("API error: /road-map/main");
            console.log(err);
            
            return res.status(500);
        }
        
        return res.status(200).json(data);
    });
});

app.get("/road-map/extra", (req, res) => {
    const query = "SELECT courses.name, courses.tier FROM courses WHERE courses.type = \"E\" ORDER BY courses.tier";
    
    db.query(query, (err, data) => {
        if (err) {
            console.log("API error: /road-map/extra");
            console.log(err);
            
            return res.status(500);
        }
        
        return res.status(200).json(data);
    });
});