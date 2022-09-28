const express = require('express')
const app = express()
const port = 3000

app.get('/polls/', (req, res) => {
  res.send(`Hello, world. You're at the polls index.`)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
