const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')


router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = 'SELECT * from "shopping"';

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    let queryText = 'INSERT INTO "shopping" ("name", "quantity", "unit") VALUES ($1, $2, $3);'
    pool.query(queryText, [req.body.name, req.body.quantity, req.body.unit]) // ????
        .then((result) => {
            res.sendStatus(200);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

module.exports = router;

// pool.query(sqlText, [id])
// .then((result) => {
//     console.log(`Got stuff back from the database`, result);
//     res.sendStatus(201);
//     res.sendStatus(204);
// })
// .catch((error) => {
//     console.log(`Error making database query ${sqlText}`, error);