let x;
let random;

x = document.getElementById("number");
random = document.getElementById("random");
random.onclick = function()
{
    x.innerHTML = Math.round(Math.random()*100)
}
