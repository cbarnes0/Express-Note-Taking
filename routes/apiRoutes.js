const api = require('express').Router();
let db = require('../db/db.json');
const fs = require('fs');

api.get('/notes', function (req, res) {
    console.log(`${req.method} request received`);
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        dbData = JSON.parse(data);
        res.json(dbData);
    });
});

api.post('/notes', function (req, res) {
    console.log(`${req.method} request received`);
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: Math.random()
    };
    db.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    res.json(db);
});

api.delete('/notes/:id', function (req, res) {
    let notesToKeep = [];
    for (let i = 0; i < db.length; i++) {
        if (db[i].id != req.params.id) {
            notesToKeep.push(db[i]);
        };
    };
    db = notesToKeep;
    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    res.json(db);
});

module.exports = api;