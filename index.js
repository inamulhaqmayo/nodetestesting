require('dotenv').config()
const express = require('express')
const app = express()
// Use port from environment or default to 3000
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('this is home page request')
  })

  app.get('/login', (req, res) => {
    res.send('<h1>login at nodejs testing project</h1>')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})