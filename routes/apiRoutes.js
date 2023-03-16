const router = require('express').Router();
const db = require('../db/db.json');
const fs = require('fs');

router.get('/api/notes', function (req, res) {

    console.log("Executing GET notes request");

    let data = JSON.parse(fs.readFileSync("../db/db.json", "utf8"));
    
    console.log("GET request - Returning notes data: " + JSON.stringify(data));
    
    response.json(data);
});
