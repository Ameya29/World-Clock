const express = require('express')
const path = require('path')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/index.html'))
//   res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} \nhttp://localhost:8080/`)
})