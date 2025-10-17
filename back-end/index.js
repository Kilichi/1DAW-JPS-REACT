const express = require('express')
const app = express()
const port = 3000

// GET QUE DEVUELVA TODOS LOS TRABAJOS
// POST PARA SUBIR TRABAJOS
// GET QUE TE DEVUELVA LA IMAGEN DE UN TRABAJO CON LA ID

app.get('/getImages', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})