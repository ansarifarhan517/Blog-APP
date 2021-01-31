const express = require('express');
const mysql = require('mysql');
const router = express('router');

router.get('/category-list', (req, res) => {
    const query = `SELECT * FROM categoryList;`;
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'farhans',
        password: '123456',
        database: 'blog'
    })
    connection.connect();
    connection.query(query, (error, results) => {
        if (error) res.status(500).json(error);
        res.json(results)

    });
    connection.end();

});

router.get('/tag-list', (req, res) => {
    const query = 'SELECT * FROM tagList';
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'farhans',
        password: '123456',
        database: 'blog'
    });
    connection.connect();
    connection.query(query, (error, results) => {
        if(error) res.status(500).json(error);
        res.json(results);
    });
    connection.end();
})

// router.get('/:id', (req, res) => {
//     const id = req.params.id;
//     const query = `SELECT * FROM categoryList WHERE ?;`;
//     const connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'farhans',
//         password: '123456',
//         database: 'blog'
//     });

//     connection.connect();
//     connection.query(query, [id], (error, results) => {
//         if (error) {
//         res.status(500).json(error);
//         }
//         if (results.length > 0) {
//             res.json(results[0]);
//         } else {
//             res.json(null);
//         }
//     });

//     connection.end();
// })

module.exports = router