const { response } = require('express')
const express = require('express')
const server = express()
const PORT = process.env.PORT || 4000

server.get('/', (request, response) => {
  response.send('<h1>hello server...</h1>')
})

server.listen(PORT, process.stdout.write(`Server is runnning at PORT: ${PORT}`))