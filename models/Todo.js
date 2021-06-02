const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

//todos Module export
module.exports = mongoose.model('todo', todoSchema);
