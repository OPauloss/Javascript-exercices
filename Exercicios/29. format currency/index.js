//tolLocalString() = returns a string with a language sensitive representation of this number

//number.toLocaleString(locale, {options});
//'locale' = specify that language (undefined = default set in browser)
//'options' = object with formatting options

let num = 123456.789;
num = num.toLocaleString("en-US"); // US English
console.log(num);
num = num.toLocaleString("hi-IN"); // Hindi
num = num.toLocaleString("de-DE"); // standard German

num = num.toLocaleString("en-US", {style: "currency", currency: "USD"});
num = num.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
num = num.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

num = num.toLocaleString(undefined, {style: "percent"});
num = num.toLocaleString(undefined, {style: "unit", unit: "celsius"});
