const axios = require('axios');
const https = require('https');

var api_base = "http://localhost:3000/api/";

/*
var task_lists = (req, res) => {
  res.render('task_lists', { title: 'Task Lists',
task_lists:[{
  title: 'Everyday'
},{
  title: 'Business goals'
}, {
  title: 'Stealing the Moon checklist'
}]
});
};
*/


var task_lists = (req, res) => {
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

/* Vrni podrobnosti lokacije */
/*
var tasks = (req, res) => {
  var data;
  axios.get('http://localhost:3000/api/lists')
  .then(response => {
    data = "{ title: 'Tasks', ";
    data += JSON.stringify(response.data);
    data += "}";
    //console.log(data);
    // data = JSON.parse(data);
    console.log(data);
  }).then(res.render('tasks', data))
  .catch(error => {
    console.log(error);
  });*/


  /*tasks:[{
    number: 1,
    description: 'Clean your room',
    date: '22.11.2019',
    done: false
  }, {
    number: 2,
    description: 'Do the homework',
    date: '21.11.2019',
    done: false
  }, {
    number: 3,
    description: 'Stay fresh cheese bags',
    date: '20.11.2019',
    done: true
  }]
});
};*/

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
