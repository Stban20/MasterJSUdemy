"use strict";

//FETCH (ajax)
//It is a method to do requests to services / api rest / backend

let divUsers = document.querySelector("#divUsers");

//--------Fetch first petition
/*
let usersPage = [];

fetch("https://reqres.in/api/users") //receive an url and after promises
  .then((data) => data.json()) //methodo then that catch the data and converted to json
  .then((users) => {
    //here we have the data ready, so, we use another then to use a callback function to save the data other variable
    usersPage = users.data; //
    console.log(usersPage);
    usersPage.map((user, i) => {
      let name = document.createElement("h3");

      name.innerHTML = ` ${i}. ${user.first_name} ${user.last_name}`;
      divUsers.appendChild(name);
      document.getElementById("pLoading").style.display = "none";
    });
  });
*/

//---------Fetch two petitions
// Using the first petition but now is enhanced with fuctions

let divTeacher = document.querySelector("#divTeacher");
let divSingleUser = document.querySelector("#divSingleUser");

//Promises to catch the data from the requests
getUsers()
  .then((data) => data.json())
  .then((users) => {
    console.log(users); //Info from api rest in json format
    usersList(users.data);
    return getTeacher();    //return the Teacher promise to continue with the promises
  })
  .then((data) => {
    console.log(data);
    console.log(data.url);
    let name = document.createElement("h3");
    name.innerHTML = `${data.first_name} ${data.last_name}`;
    divTeacher.appendChild(name);
    document.getElementById("pLoadingTeacher").style.display = "none";

    return getSingleUser(); //return the single user request to continue with the promises
  })
  .then((data) => data.json())
  .then((user) => {
    console.log(user); //Info from api rest in json format
    singleUsersList(user.data);
  })
  //To catch an error in the promises we should add this code
  .catch(error => {
      console.log(error)
  });

//Function to go through the array users and show them
function usersList(usersPage) {
  console.log(usersPage);
  usersPage.map((user, i) => {
    let name = document.createElement("h3");
    name.innerHTML = ` ${i}. ${user.first_name} ${user.last_name}`;
    divUsers.appendChild(name);
    document.getElementById("pLoading").style.display = "none";
  });
}

//Function to show the user
function singleUsersList(user) {
  console.log(user);
  let name = document.createElement("h3");
  let avatar = document.createElement("img");
  name.innerHTML = `${user.first_name} ${user.last_name}`;
  avatar.src = user.avatar;
  avatar.width = "100";
  divSingleUser.appendChild(name);
  divSingleUser.appendChild(avatar);
  document.getElementById("pLoadingSingleUser").style.display = "none";
}
//Function to request the data to the api rest for multiple user
function getUsers() {
  return fetch("https://reqres.in/api/users");
}
//Function to request the data to the api rest for single user
function getSingleUser() {
  return fetch("https://reqres.in/api/users/2");
}
//To create promise, first we need to create the json first
function getTeacher() {
  let teacher = {
    first_name: "Victor",
    last_name: "Robles",
    url: "https://victorroblesweb.es",
  };
  console.log(teacher);
  //then we create the promise with the resolve and reject
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (teacher == "") return reject("Error promise");
      return resolve(teacher);
    }, 3000);
  });
}
