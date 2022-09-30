const express = require('express')
const {Question} = require('./models')
const pug = require('pug')
const app = express()
const port = 3000

app.get('/polls/', (req, res) => {
  let questions = Question.findAll()
  let questionTemplate = pug.compileFile('templates/index.pug')
  let body = questionTemplate({questions: questions})
  res.send(body)
})

app.get('/polls/:pollId/', (req, res) => {
  res.send(`You're looking at question ${req.params.pollId}`)
})

app.get('/polls/:pollId/results/', (req, res) => {
  res.send(`You're looking at the results of question ${req.params.pollId}`)
})

app.get('/polls/:pollId/vote/', (req, res) => {
  res.send(`You're voting on question ${req.params.pollId}`)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
