const
  mongoose = require('mongoose'),
  userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
  })
  
const User = mongoose.model('User', userSchema)
module.exports = User

// creating new user - hardcoded:

// var newUser = new User()
// newUser.name = "Nina"
// newUser.age = 25
// newUser.email = "nina4klemencic@gmail.com"
// newUser.save(function(err, savedUser){
//   console.log(savedUser)
// })