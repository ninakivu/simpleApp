const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  bodyParser = require('body-parser')
  mongoose = require('mongoose'),
  User = require('./models/User')


app.use(logger('dev'))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/simpleappdb'), function(err) {
  console.log(err || "Connected to MongoDB.")
}




app.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users)
  })
})

app.get('/users/:id', function(req, res) {
  User.findById(req.params.id, function(err, thatUser){
    if(err) {
      res.json({message:"There was a problem."})
      console.log(err)
    } else {
    res.json(thatUser)
    }
  })
})

// create user:
app.post('/users', function(req, res) {
  User.create(req.body, function(err, brandNewUser){
    if(err) return console.log(err)
    res.json({message: "User created.", user: brandNewUser})
  })
})

app.listen(3000, function(err) {
  console.log(err || "Server running on 3000.")
})