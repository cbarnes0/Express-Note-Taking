const api = require('express').Router();
const db = require('../db/db.json');
const fs = require('fs');

api.get('/notes', function (req, res) {
    console.log(`${req.method} request received`)
    fs.readFile('../db/db.json', (err, data) => {
        if (err) throw err;
        dbData = JSON.parse(data);
        res.send(dbData);
    });
});

module.exports = api;