const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const port = process.env.PORT || 3030;

mongoose.connect('mongodb://localhost/posters');
const db = mongoose.connection;
db.on('error', () => console.log('mongodb connection failed'));
db.once('open', () => console.log('mongodb connection successfull'));

app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port,() => console.log(`${port}  server is ruining`));