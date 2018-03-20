const express = require('express')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))

app.get('/api/some-resource', function(req, res) {
  res.json(require('./data-set.json'))
})

app.get('/api/some-resource/:id', function(req, res) {
  const users = require('./data-set.json')
  res.json(users[req.params.id])
})

app.use('/', express.static('public'))

app.listen(8000, function() {
  console.log('Listening on port 8000...')
})
