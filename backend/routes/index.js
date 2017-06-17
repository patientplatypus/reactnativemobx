var express = require('express');
var router = express.Router();
var InputTexts = require('../models/textsSchema');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/sndtodb', function(req,res,next){
  var inputText = new InputTexts({
    text: req.body.text
  })

  inputText.save(function(err,post){
    if (err) {return next(err)}
    res.send("saveOk")
  })
})

module.exports = router;
