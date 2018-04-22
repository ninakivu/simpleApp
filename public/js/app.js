var users = [
  'Nina',
  'Tom',
  'Angela',
  'Ginger',
  'Ben',
  'Hank',
  'Pierre'
]

var randomNumber = Math.floor(Math.random() * (users.length))
document.getElementById('userInfo').innerHTML = users[randomNumber]


function refreshData() {
  var randomNumber = Math.floor(Math.random() * (users.length))
  document.getElementById('userInfo').innerHTML = users[randomNumber]
}

window.setInterval(refreshData, 60000)

