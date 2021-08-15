var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST*/
router.post('/', function(req, res, next) {
  console.log('id:'+req.body.id);
  console.log('name:'+req.body.name);

  
  res.send({ code: '000', description: 'success response' })
});


module.exports = router;
