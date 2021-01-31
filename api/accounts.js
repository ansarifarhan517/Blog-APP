const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
router.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const query = `SELECT * FROM user WHERE username = ?;`;
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'farhans',
        password: '123456',
        database: 'blog'
    });

    connection.connect();
    connection.query(query, [username], (error, results) => {
        if (error) {
            res.status(500).json(error);
        }
        if (results.length > 0) {
            res.status(500).json('Record Already Exist');
        }
        else {

            bcrypt.hash(password, saltRounds, (error, hash) => {
                if (error) { res.status(500).json(error); }

                else {
                    const data = {
                        username: username,
                        password: hash
                    }
                    const query2 = `INSERT INTO user SET ?`;
                    connection.query(query2, [data], (error, results) => {
                        if (error) res.status(500).json(error);
                        else {
                            res.status(200).json("inserted");
                        }
                    });
                }
            });

        }
    })
})

router.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const query = 'SELECT * FROM user WHERE username = ?';
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'farhans',
        password: '123456',
        database: 'blog'
    });
    connection.connect();

    connection.query(query, [username], (error, results) => {

        if (error) {
            res.status(500).json(error);
        }
        if (results.length > 0) {
            const passwordHash = results[0].password;
            bcrypt.compare(password, passwordHash, (error, bcryptResults) => {
                if (error) {
                    res.status(500).json(error);
                }
                else if (bcryptResults) {
                    const secretKey = 'farhan123';
                    const payload = {
                        id: results.id,
                        username: results.username
                    }
                    const options = {
                        expiresIn: 3600
                    }
                    jwt.sign(payload, secretKey, options, (error, token) => {
                        if (error) res.status(500).json(error);
                        else res.status(200).json({ payload, token })
                    })
                }
                else res.status(401).json();
            })
        }
        else res.status(401).json();
    });

});

router.post('/authorized', (req, res) => {

    res.json({
        authorized: true
    });


})
module.exports = router;