const URL = "https://web-students-1aa35.firebaseio.com/group-01.json";

fetchData();

function fetchData(){
 
  var request = new XMLHttpRequest();
  request.open('GET', URL, true);

  request.onload = function() {
    const OK = 200;
    
    if (request.status !== OK) {
      document.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
      return;
    }
  };
  request.send();
}

