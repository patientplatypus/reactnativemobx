
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  text: { type: String, required: false },
});

var InputTexts = mongoose.model('InputTexts', schema);

module.exports = InputTexts;
