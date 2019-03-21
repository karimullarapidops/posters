const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');

app.use(bodyParser.json());
app.use('/api', routes);


app.listen(3030,() => console.log('3030  server is ruining'));