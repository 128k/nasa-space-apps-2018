const express = require('express')
const app = express()
const http = require('http').Server(app)
const path = require('path')

const PORT = process.env.PORT || 8080

// Serve client code
app.use(express.static(path.resolve(__dirname, '..', '..', 'public')))

http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`)
})