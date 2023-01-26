// temperature conversion program

document.getElementById("submit").onclick = function(){

    let temp;

    if(document.getElementById("celsius").checked){
        
        temp = document.getElementById("temp").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        console.log(`${temp}ºC`);
    }
    else if(document.getElementById("fahrenheit").checked){
        
        temp = document.getElementById("temp").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        console.log(`${temp}ºF`);
    }
    else{
        console.log("select an unit");
    }
}



function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
    return temp * 9 / 5 + 32;
}