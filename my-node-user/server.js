'use strict'

const express = require('express');

const PORT = 8000;
const HOST = '0.0.0.0';

const app = express();
app.get('/user', (req, res) => {
    res.send('hello user');
});

app.listen(PORT, HOST);
console.log(`Running on ${HOST}:${PORT}`);