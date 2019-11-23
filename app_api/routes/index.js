var express = require('express');
var router = express.Router();
var ctrlPage = require('../controllers/page');

/* Lokacije */
router.get('/lists',
  ctrlPage.getAllLists);
router.post('/lists',
  ctrlPage.addNewList);
router.post('/tasks/:idList',
  ctrlPage.addNewTask);
router.get('/lists/:idList',
  ctrlPage.getListById);
router.put('/lists/:idList',
  ctrlPage.updateList);
router.put('/tasks/:idList',
  ctrlPage.markTaskAsDone);
router.delete('/lists/:idList',
  ctrlPage.deleteList);
router.delete('/tasks/:idList',
  ctrlPage.deleteTask);


module.exports = router;
