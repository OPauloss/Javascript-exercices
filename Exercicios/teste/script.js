//Number guessing game

let num = Math.ceil(Math.random() * 10);
let btn = document.getElementById("submitbtn");
console.log(num)
let counter = 0;

btn.onclick = function(){

    let user = document.getElementById("guessLabel").value;

    if(user > num){

        window.alert("Too high");
        counter += 1;
    }
    else if(user < num){

        window.alert("Too low");
        counter += 1;
    }
    else{
        window.alert(`You win! It took you ${counter} guesses.`);
        ;
    }
}



