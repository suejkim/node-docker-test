'use strict'

const express = require('express');

const PORT = 8001;
const HOST = '0.0.0.0';

const app = express();
app.get('/manager', (req, res) => {
    console.log("호출")
    res.send('hello manager');
});

app.listen(PORT, HOST);
console.log(`Running on ${HOST}:${PORT}`);