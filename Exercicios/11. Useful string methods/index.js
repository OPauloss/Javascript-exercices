// Useful string properties & methods

let username = "Opauloss";
let phoneNumber = "123-456-7890"
console.log(username.length);
console.log(username.charAt(1)); //displays character at 1st position
console.log(username.indexOf("o")); //display first occurence of a character
console.log(username.lastIndexOf("s")); //display last occurence of a character

username = username.trim(); //remove empty spaces
username = username.toUpperCase();
username = username.toLowerCase();

phoneNumber = phoneNumber.replaceAll("-", "")
console.log(username);
console.log(phoneNumber);