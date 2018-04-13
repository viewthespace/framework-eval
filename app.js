const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/some-resource', function(req, res) {
  logger('sup bruh');
  res.json(require('./data-set.json'));
});

app.get('/api/user/:id/edit', function(req, res) {
  const dataSet = require('./data-set.json');
  res.json(dataSet[req.params.id]);
});

app.post('/api/user/add', function(req, res) {
  const { name, height } = req.body;
  const dataSet = require('./data-set.json');

  dataSet.push({
    name,
    height
  });
  fs.writeFile('./data-set.json', JSON.stringify(dataSet));
  res.sendStatus(200);
});

app.get(/\/.*/, function(req, res) {
  res.sendFile(path.resolve(path.join('public', 'index.html')));
});

app.listen(8000, function() {
  console.log('Listening on port 8000...');
});
