var express = require('express');
var router = express.Router();
var ctrlPage = require('../controllers/page');

/* Lokacije */
router.get('/lists',
  ctrlPage.getAllLists);
router.post('/lists',
  ctrlPage.addNewList);
router.get('/lists/:idList',
  ctrlPage.getListById);
router.put('/lists/:idList',
  ctrlPage.updateList);
router.delete('/lists/:idList',
  ctrlPage.deleteList);


module.exports = router;
