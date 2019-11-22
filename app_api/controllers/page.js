const mongoose = require('mongoose');
const Lists = mongoose.model('List');

const getAllLists = (req, res) => {
  Lists
    .find()
    .exec((napaka, lists) => {
      res.status(200).json(lists);
    });
};

const addNewList = (req, res) => {
  res.status(200).json({"status": "uspešno"});
};

const getListById = (req, res) => {
  Lists
    .findById(req.params.idList)
    .exec((napaka, list) => {

      if (!list) {
        return res.status(404).json({
          "message":
            "Can't find the specified list"
        });
      } else if (napaka) {
        return res.status(500).json(napaka);
      }


      res.status(200).json(list);
    });
};

const updateList = (req, res) => {
  res.status(200).json({"status": "uspešno"});
};

const deleteList = (req, res) => {
  res.status(200).json({"status": "uspešno"});
};

module.exports = {
  getAllLists,
  addNewList,
  getListById,
  updateList,
  deleteList
};
