const
  express = require('express'),
  app = express(),
  logger = require('morgan')
  
app.use(logger('dev'))
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})


app.listen(3000, (err) => {
  console.log(err || "Server running on 3000.")
})