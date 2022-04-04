// How to accept user input

//EASY WAY with a window prompt

//let username = window.prompt("What's your name?");
//console.log(username)

//HARD WAY with html textbox

let username;

document.getElementById("btn").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
}