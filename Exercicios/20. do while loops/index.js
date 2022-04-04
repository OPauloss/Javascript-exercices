// do while loop = do something, only then check de condition, repeat if the condition is true

let username;

do
{
    username = window.prompt("Enter your username");
}
while (username == "");

console.log("Hello,", username);