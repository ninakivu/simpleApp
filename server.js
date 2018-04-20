const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  User = require('./models/User')


app.use(logger('dev'))

mongoose.connect('mongodb://localhost/simpleappdb'), function(err) {
  console.log(err || "Connected to MongoDB.")
}


app.listen(3000, function(err) {
  console.log(err || "Server running on 3000.")
})

app.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.send(users)
  })
})

app.get('/users/:id', function(req, res) {
  res.send("Profile page for an user: " + req.params.id)
})