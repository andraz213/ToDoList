var api_base = "https://to-do-od-ot.herokuapp.com/";

document.querySelectorAll('.deleteListButton').forEach(item => {
  item.addEventListener('click', event => {
    var api_url = api_base + "lists/" + item.getAttribute("list_id_data");
    console.log(api_url);
    axios
    .delete(api_url)
    .then(r => {console.log(r.status);
    var elem = document.getElementById(item.getAttribute("list_id_data"));
    elem.parentNode.removeChild(elem);
    item.parentElement.parentElement.parentElement.innerHTML = "";})
    .catch(e => console.log(e));

    console.log(item.getAttribute("task_id_data"));
    //handle click
  })
})
