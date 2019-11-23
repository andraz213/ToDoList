var api_base = "https://todoodot.herokuapp.com/api/";

document.querySelectorAll('.taskDoneButton').forEach(item => {
  item.addEventListener('click', event => {
    var url = window.location.href;
    var tab = url.split("/");
    var id = tab[tab.length-1];
    var api_url = api_base + "tasks/" + id;
    console.log(api_url);
    var data = "{\"taskId\": \"" + item.getAttribute("task_id_data") + "\"}";
    data = JSON.parse(data);
    axios
    .put(api_url, data)
    .then(r => {console.log(r.status);
    item.parentElement.innerHTML = "<span class=\"badge badge-success\">YAY</span>";})
    .catch(e => console.log(e));

    console.log(item.getAttribute("task_id_data"));
    //handle click
  })
});


document.querySelectorAll('.deleteTaskButton').forEach(item => {
  item.addEventListener('click', event => {
    var url = window.location.href;
    var tab = url.split("/");
    var id = tab[tab.length-1];
    var api_url = api_base + "tasks/" + id;
    console.log(api_url);
    var data = "{\"data\": {\"taskId\": \"" + item.getAttribute("task_id_data") + "\"}}";
    data = JSON.parse(data);
    console.log(data);
    axios
    .delete(api_url, data)
    .then(r => {console.log(r.status);
    var elem = document.getElementById(item.getAttribute("task_id_data"));
    elem.parentNode.removeChild(elem);
    item.parentElement.parentElement.parentElement.innerHTML = "";})
    .catch(e => console.log(e));

    console.log(item.getAttribute("task_id_data"));
    //handle click
  })
});


document.querySelectorAll('.deleteListButton').forEach(item => {
  item.addEventListener('click', event => {
    var api_url = api_base + "lists/" + item.getAttribute("list_id_data");
    console.log(api_url);
    axios
    .delete(api_url)
    .then(r => {console.log(r.status);
    setTimeout(function(){backToHomePage()}, 100);})
    .catch(e => console.log(e));

    console.log(item.getAttribute("task_id_data"));
    //handle click
  })
});

function backToHomePage(){
  window.location = "https://todoodot.herokuapp.com/";
}
