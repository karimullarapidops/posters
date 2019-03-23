const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect('mongodb://localhost/posters');
const db = mongoose.connection;
db.on('error', () => console.log('mongodb connection failed'));
db.once('open', () => console.log('mongodb connection successfull'));
app.use(bodyParser.json());
app.use('/api', routes);


app.listen(3030,() => console.log('3030  server is ruining'));