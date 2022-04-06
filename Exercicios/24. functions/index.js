// function = Define code once, and use it many times.
// to perform some code, call the function name.


startProgram();

function startProgram()
{
let username = "Ouragan";
let age = 21;
happyBirthday(username, age);
}



function happyBirthday(a, b)
{
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${a}!`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${b} years old.`);
}