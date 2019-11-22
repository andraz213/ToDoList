var express = require('express');
var router = express.Router();
var ctrlPage = require('../controllers/page');

/* GET home page. */
router.get('/', ctrlPage.task_lists);
router.get('/task_lists/add', ctrlPage.add_list);
router.get('/tasks', ctrlPage.tasks);
router.get('/tasks/add', ctrlPage.add_task);

module.exports = router;
