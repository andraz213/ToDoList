var api_base = "https://to-do-od-ot.herokuapp.com/";

document.getElementById("newListButton").addEventListener("click", addNewList);

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
    document.getElementById("successSpace").innerHTML = "<span class=\"badge badge-danger\">Failed</span>";
    console.log(error);
  });

};


function backToHomePage(){
  window.location = "https://to-do-od-ot.herokuapp.com/";

}
