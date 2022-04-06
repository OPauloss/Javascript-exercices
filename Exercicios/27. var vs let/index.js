// variable scope = where a variable is accessible
// let = variables are limited to block scope{}
// var = variables are limited to a function(){}

// global variable = is declared outside any function
// (if global, var will change browser's window properties)

let name = "Paulo" //global (outside functions or block scopes)

for(let i = 1; i <= 3; i += 1)
{
    //console.log(i);
}
console.log(i); // 'i' is not visible

for(var i = 1; i <= 3; i += 1)
{
    //console.log(i);
}
console.log(i); // 'i' is visible