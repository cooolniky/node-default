const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect('mongodb://localhost/node-default',{ useNewUrlParser: true, createIndexes: true })
    .then(() => winston.info('Connected to MongoDB...'));
}