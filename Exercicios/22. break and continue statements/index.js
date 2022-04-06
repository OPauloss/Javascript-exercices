// break = breaks out of a loop entirely
// continue = skip an iteration of a loop

for(let i = 1; i <= 20; i += 1)
{
    if(i == 13){
        continue; // skip iteration (number 13 won't appear, but it will continue at 14)
    }
    console.log(i);
}