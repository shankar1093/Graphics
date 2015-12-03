var express = require('express')
var app = express()

// app.set('port', (process.env.PORT || 5000))
var port = process.env.PORT || 5000
app.use(express.static(__dirname + '/public'))

require('./app/routes')(app)

// app.get('/', function(request, response) {
//   response.send('Test application for front end in computer graphics')
// })


// app.listen(app.get('port'), function() {
//   console.log("Node app is running at localhost:" + app.get('port'))
// })


app.listen(port);
console.log("Magic happens on port" + port);
exports = module.exports = app;