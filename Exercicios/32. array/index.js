// array = similar to a variable,
//         but it can store multiple values

let fruits = ["apple", "orange", "banana"];

fruits[0] = "cononut" // changing the value of an item within an array

fruits.push("lemon"); // add an element
fruits.pop(); //removes last element
fruits.unshift("mango"); //add element to beggining
fruits.shift(); // removes element from beggining

let length = fruits.length;
let index = fruits.indexOf("apple"); // index 0


console.log(fruits);
console.log(fruits[0]);