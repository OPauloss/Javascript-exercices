// A variable is a container for a storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignement (= assignment operator)

let firstName = "Paulo"; //string
let age = 26; //number
let student = true; //boolean

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log(student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;