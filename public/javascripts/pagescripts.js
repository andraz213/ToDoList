//const axios = require('axios');

var api_base = "http://localhost:3000/api/";


document.getElementById("newListButton").addEventListener("click", addNewList);
document.getElementById("newTaskButton").addEventListener("click", addNewTask);

function addNewList(){
  var newTitle = document.getElementById("newListTitle").value;
  var api_url = api_base + "lists"
  data = '{"title": \"';
  data += newTitle;
  data += "\"}";
  data = JSON.parse(data);

  axios.post(api_url, {
    title: newTitle
  })
  .then(function (response) {

    console.log(response);
    document.getElementById("successSpace").innerHTML = "<span class=\"badge badge-success\">Success</span>";
    backToHomePage();

  })
  .catch(function (error) {
    //window.location = "http://localhost:3000";
    document.getElementById("successSpace").innerHTML = "<span class=\"badge badge-danger\">Failed</span>";
    console.log(error);
  });

};

function addNewTask(){
  var newTitle = document.getElementById("newTaskTitle").value;
  var url = window.location.href;
  var tab = url.split("/");
  var id = tab[tab.length-1];
  var api_url = api_base + "lists/" + id;
  var new_task = "{\"date\": \"22.11.2019\", \"done\": false, \"number\": 24, \"description\": \"";
  new_task += newTitle;
  new_task +="\"}";
  new_task = JSON.parse(new_task);
  console.log(new_task);
  axios.get(api_url)
  .then(response => {
    console.log(response.data);
    var list1 = response.data;
    list1.tasks.push(new_task);

    axios.put(api_url, list1)
    .then(function (response) {

      console.log(response);
      document.getElementById("successSpace").innerHTML = "<span class=\"badge badge-success\">Success</span>";


    })
    .catch(function (error) {

      document.getElementById("successSpace").innerHTML = "<span class=\"badge badge-danger\">Failed</span>";
      console.log(error);
    });
  });


};



function backToHomePage(){
  window.location = "http://localhost:3000";

}
