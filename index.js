const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello from warunk app!')
})

app.listen(port, () => console.log(`Warunk app listening on port http://localhost:${port}`))
