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

/* Vrni podrobnosti lokacije */
var tasks = (req, res) => {
  res.render('tasks', { title: 'Tasks',
  tasks:[{
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
};

/* Vrni stran za dodajanje komentarjev */
var add_list = (req, res) => {
  res.render('index', { title: 'Add List' });
};

var add_task = (req, res) => {
  res.render('index', { title: 'Add Task' });
};


module.exports = {
  task_lists,
  tasks,
  add_list,
  add_task
};
