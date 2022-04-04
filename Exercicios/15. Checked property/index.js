let btn;
let checkbox;
let visaBtn;
let mastercardBtn;
let paypalBtn;

btn = document.getElementById("myButton");
checkbox = document.getElementById("myCheckBox");
visaBtn = document.getElementById("visaBtn");
mastercardBtn = document.getElementById("mastercardBtn");
paypalBtn = document.getElementById("paypalBtn");


btn.onclick = function()
{
    if (checkbox.checked){
        console.log("You are subscribed!");
    }
    else{
        console.log("You are NOT subscribed!")
    }

    if (visaBtn.checked){
        console.log("Your payment method is: VISA")
    }
    else if (mastercardBtn.checked){
        console.log("Your payment method is: MASTERCARD")
    }
    else{
        console.log("Your payment method is: PAYPAL")
    }
}