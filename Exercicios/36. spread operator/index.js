// spread operator = allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected (unpacks the elements)

let numbers = [1, 2, 3, 4 ,5, 6, 7, 8, 9];
console.log(...numbers); // unpacks elements of the numbers array so we can discover its maximum value, for example

let maximum = Math.max(...numbers); 
