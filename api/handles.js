var express = require('express')
var router = express.Router()

router.get('/',function(req,res) {
  res.send('<h1>Welcome to the homepage!</h1>' +
  '<br/>Use the /hello route with a "name" query parameter like this:' +
  '<br/>/hello?name=YourName\n' +
  '<br/>If you use your own name, you will get an intro about yourself.'+
  '<br/>If you use any other name, it will greet the name randomly.')
})

module.exports = router;
 