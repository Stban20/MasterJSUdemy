"use strict";

//FETCH (ajax)
//It is a method to do requests to services / api rest / backend

let usersPage = [];

let divUsers = document.querySelector("#divUsers");

fetch("https://reqres.in/api/users") //receive an url and after promises
  .then((data) => data.json()) //methodo then that catch the data and converted to json
  .then((users) => {
    //here we have the data ready, so, we use another then to use a callback function to save the data in teh variable
    usersPage = users.data; //
    console.log(usersPage);
    console.log(data);

    usersPage.map((user, i) => {
      let name = document.createElement("h3");

      name.innerHTML = ` ${i}. ${user.first_name} ${user.last_name}`;
      divUsers.appendChild(name);
      document.getElementById("pLoading").style.display = "none";
    });
  });

fetch("https://reqres.in/api/users").then((data) => data.json()).the;
