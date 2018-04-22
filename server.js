const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  bodyParser = require('body-parser')
  mongoose = require('mongoose'),
  User = require('./models/User')

mongoose.connect('mongodb://localhost/simpleappdb', (err) => {
  console.log(err || "Connected to MongoDB.")
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

// list of users:
app.get('/users', (req, res) => {
  User.find({}, (err, allUsers) => {
    if(err) return console.log(err)
    res.json(allUsers)
  })
})

// show a specific user
app.get('/users/:id', (req, res) => {
  User.findById(req.params.id, (err, thatUser) => {
    if(err) {
      res.json({message:"There was a problem."})
      console.log(err)
    } else {
    res.json(thatUser)
    }
  })
})

// create user:
app.post('/users', (req, res) => {
  User.create(req.body, (err, brandNewUser) => {
    if(err) return console.log(err)
    res.json({message: "User created.", user: brandNewUser})
  })
})

// delete user:
app.delete('/users/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
    if(err) return console.log(err)
    res.json({message: "User deleted😔", user: deletedUser})
  })
})

// update user:
app.patch('/users/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if(err) return console.log(err)
    user.save((err, updatedUser) => {
      res.json({message: "User updated.", user: updatedUser})
    })
  })
})


app.listen(3000, (err) => {
  console.log(err || "Server running on 3000.")
})