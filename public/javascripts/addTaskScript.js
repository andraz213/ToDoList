var api_base = "https://to-do-od-ot.herokuapp.com/api";

document.getElementById("newTaskButton").addEventListener("click", addNewTask);


function addNewTask(){
  var newTitle = document.getElementById("newTaskTitle").value;
  if(newTitle == ""){
    return;
  }

  var url = window.location.href;
  var tab = url.split("/");
  var id = tab[tab.length-1];
  var now = new Date();
  var date = "";
  date += now.getDate() +"."+(now.getMonth() + 1) + "." + now.getFullYear();

  var api_url = api_base + "tasks/" + id;
  var new_task = "{\"date\": \"" + date + "\", \"done\": false, \"number\": 24, \"description\": \"";
  new_task += newTitle;
  new_task +="\"}";
  new_task = JSON.parse(new_task);
  console.log(new_task);
  axios.post(api_url, new_task)
  .then(function (response) {

    console.log(response);
    document.getElementById("successSpace").innerHTML = "<span class=\"badge badge-success\">Success</span>";
    setTimeout(function(){window.location.reload(false)}, 10);


  })
  .catch(function (error) {
    document.getElementById("successSpace").innerHTML = "<span class=\"badge badge-danger\">Failed</span>";
    console.log(error);
  });


};
