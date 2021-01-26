const { response } = require('express')
const express = require('express')
const server = express()
const PORT = process.env.PORT || 4000


server.get('/', (request, response) => {
  response.send('hello')
})

server.listen(PORT, process.stdout.write(`Server is running... PORT: ${PORT}`))