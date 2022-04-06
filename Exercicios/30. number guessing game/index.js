//Number guessing game

let pcNum = Math.ceil(Math.random() * 10);
let submit = document.getElementById("submit");
let counter = 0;

submit.onclick = function(){
    let myNum = document.getElementById("guess").value;
    counter += 1;
    if (pcNum < myNum)
    {
        window.alert("too high!");
    }
    else if (pcNum > myNum)
    {
        window.alert("too low!");
    }
    else
    {
        window.alert(`You win! It took you ${counter} guesses.`);
    }
}


