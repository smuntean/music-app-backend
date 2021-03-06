const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { listSongs, listCharts } = requires('./billboard-fetch')

const allowCORS = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  req.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
}

app.use(bodyParser.json());
app.use(allowCORS)
app.use(allowCors);
app.get('/songs/:query/:date', listSongs)
app.get('/charts', listCharts)