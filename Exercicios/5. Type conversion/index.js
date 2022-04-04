// Type conversion = change the datatype of a value to another
//              (strings, numbers, booleans)

let age = window.prompt("How old are you?");
console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;
console.log("Happy Birthday! You are", age, "years old");