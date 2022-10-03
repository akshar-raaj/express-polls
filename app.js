const express = require('express')
const {Question} = require('./models')
const pug = require('pug')
const app = express()
const port = 3000

var pollsList = async function(req, res) {
  let questions = await Question.findAll()
  let questionTemplate = pug.compileFile('templates/index.pug')
  let body = questionTemplate({questions: questions})
  res.send(body)
}

var pollsDetail = async function(req, res) {
  // Add support for 404
  let questions = await Question.findAll({where: {id: req.params.pollId}})
  let question = questions[0]
  let questionTemplate = pug.compileFile('templates/detail.pug')
  let body = questionTemplate({question: question})
  res.send(body)
}

app.get('/polls/', pollsList)

app.get('/polls/:pollId/', pollsDetail)

app.get('/polls/:pollId/results/', (req, res) => {
  res.send(`You're looking at the results of question ${req.params.pollId}`)
})

app.get('/polls/:pollId/vote/', (req, res) => {
  res.send(`You're voting on question ${req.params.pollId}`)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
