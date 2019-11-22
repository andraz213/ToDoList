var mongoose = require('mongoose');


const taskShema = new mongoose.Schema({
  number: {type: Number, required: true},
  description: {type: String, required: true},
  date: {type: String, required: true},
  done: {type: Boolean, required: true}
});

const listShema = new mongoose.Schema({
  title: {type: String, required: true},
  tasks: [taskShema]
});


console.log(mongoose.model('List', listShema, 'Lists'));
