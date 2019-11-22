/* GET home page. */
var index = (req, res) => {
  res.render('index', { title: 'ToDoApp' });
};

module.exports = {
  index
};
