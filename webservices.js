const URL = "https://web-students-1aa35.firebaseio.com/group-01.json";

fetchData();

function fetchData(){
 
  var request = new XMLHttpRequest();
  request.open('GET', URL, true);

  request.send();
}

