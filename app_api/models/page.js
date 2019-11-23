var mongoose = require('mongoose');


const taskShema = new mongoose.Schema({
  number: {type: Number, required: true},
  description: String,
  date: {type: String, required: true},
  done: {type: Boolean, required: true}
});

const listShema = new mongoose.Schema({
  koordinate: {type: [Number], index: '2dsphere'},
  title: {type: String, required: true},
  tasks: [taskShema]
});


mongoose.model('List', listShema, 'Lists');
