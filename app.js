const express = require('express')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))

app.get('/api/some-resource', function(req, res) {
  res.json({
    a: 1,
    b: 2,
  })
})

app.use('/', express.static('public'))

app.listen(8000, function() {
  console.log('Listening on port 8000...')
})
