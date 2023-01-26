// Type conversion = change the datatype of a value to another
//              (strings, numbers, booleans)

let age = window.prompt("How old are you?");
console.log(typeof age); //age is a String
age = Number(age);
console.log(typeof age); //age is now a Number
age += 1;
console.log("Happy Birthday! You are", age, "years old");

let x;
let y;
let z;

x = Number("3.14"); //Will display 3.14 as a number
y = String(3.14); //Will display 3.14 as a string
z = Boolean(""); //Will display false. Converting an empty string into boolean will aways display false. Anything else will display true.