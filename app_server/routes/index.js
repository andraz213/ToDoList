var express = require('express');
var router = express.Router();
var ctrlPage = require('../controllers/page');

/* GET home page. */
router.get('/', ctrlPage.task_lists);
router.get('/add', ctrlPage.add_list);
router.get('/tasks/:idList', ctrlPage.tasks);
router.get('/tasks/add/:idList', ctrlPage.add_task);

module.exports = router;
