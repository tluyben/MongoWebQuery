const express = require('express')
const app = express()
let port = 3000
const fs = require('fs')
const shell = require('shelljs')
const dotenv = require('dotenv')
dotenv.config()
const { oneQuery, oneDelete, oneUpsert } = require('./mongoconn.js')

app.use(express.json())

app.post('/query', async (req, res) => {
  const body = req.body
  const result = await oneQuery(process.env.MONGO_HOST, body.login, body.pass, body.db, body.collection, body.query)
  res.send(result)
})

app.post('/upsert', async (req, res) => {
  const body = req.body
  const result = await oneUpsert(process.env.MONGO_HOST, body.login, body.pass, body.db, body.collection, body.query, body.update)
  res.send(result)
})

app.post('/delete', async (req, res) => {
  const body = req.body
  const result = await oneDelete(process.env.MONGO_HOST, body.login, body.pass, body.db, body.collection, body.query)
  res.send(result)
})

port = process.env.MONGO_API_PORT||port

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
})
