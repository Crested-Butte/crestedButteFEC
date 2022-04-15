const express = require('express')
const app = express()
const port = 3000
const controller = require('./controller.js')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../public'));

app.get('*', controller.get)
app.put('*', controller.put)
app.post('*', controller.post)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})