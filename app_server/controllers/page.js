const axios = require('axios');
const https = require('https');

var api_base = "https://todoodot.herokuapp.com/api/";

var task_lists = (req, res) => {
  console.log("controller task_lists");
  var data;
  var api_url = api_base + "lists";
  axios.get(api_url)
  .then(response => {
    data = '{"title": \"Task Lists\", "task_lists":';

    data += JSON.stringify(response.data);
    data += "}";
    data = JSON.parse(data);
    console.log(data);
    res.render('task_lists', data);
  })
  .catch(error => {
    console.log(error);
  });
};



var tasks = (req, res) => {
  var data;
  var api_url = api_base + "lists/" + req.params.idList;
  console.log(api_url)
  axios.get(api_url)
  .then(response => {
    data = '{"title": \"Tasks\", "list":';

    data += JSON.stringify(response.data);
    data += "}";
    console.log(data);
    data = JSON.parse(data);
    console.log(data);
    res.render('tasks', data);
  })
  .catch(error => {
    console.log(error);
  });
};

/* Vrni stran za dodajanje komentarjev */
var add_list = (req, res) => {
  res.render('add_list', { title: 'Add List' });
};

var add_task = (req, res) => {
  res.render('add_task', { title: 'Add Task' });
};


module.exports = {
  task_lists,
  tasks,
  add_list,
  add_task
};
