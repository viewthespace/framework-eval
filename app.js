const express = require('express')
const logger = require('morgan')
const path = require('path')

const app = express()

app.use(logger('dev'))

app.get('/api/some-resource', function(req, res) {
  res.json(require('./data-set.json'))
})

app.get('/api/user/:id/edit', function(req, res) {
  const dataSet = require('./data-set.json')
  res.json(dataSet[req.params.id])
})

app.get(/\/.*/, function(req, res) {
  res.sendFile(path.resolve(path.join('public', 'index.html')))
})

app.listen(8000, function() {
  console.log('Listening on port 8000...')
})
