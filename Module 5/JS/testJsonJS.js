function search(){
    var queryURL = "https://jsonplaceholder.typicode.com/users";
    var xhr = new XMLHttpRequest();
    xhr.open('GET', queryURL, true);
    xhr.onload = function(e){
        var jsonResponse = xhr.response;

        var users = JSON.parse(jsonResponse);
        displayUsersAsTable(users);
    }

    xhr.onerror = function(err){
        console.log("Error: " + err);
    }

    xhr.send();
}

function displayUsersAsTable(users) {
    var usersDiv = document.querySelector("#users");
    usersDiv.innerHTML = "";

    var table = document.createElement("table");

    users.forEach(function(currentUser){
        var row = table.insertRow();
        var nameCell = row.insertCell();
        nameCell.innerHTML = currentUser.name;
        var cityCell = row.insertCell();
        cityCell.innerHTML = currentUser.address.city;
    });
    usersDiv.appendChild(table);
}