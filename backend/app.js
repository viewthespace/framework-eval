const express = require('express')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))

app.get('/api/some-resource', function(req, res) {
  res.json(require('./data-set.json'))
})

app.use('/', express.static('public'))

app.listen(8000, function() {
  console.log('Listening on port 8000...')
})
