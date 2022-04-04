// switch = statement that examines a value
// for a match against many case clauses.
// More efficient that many "else if" statements

let grade = "pone";

switch (grade)
{
    case "a":
        console.log("You did great!");
        break;
    case "b":
        console.log("You did good!");
        break;
    case "c":
        console.log("You did okay.");
        break;
    case "d":
        console.log("You passed... barely!");
        break;
    case "e":
        console.log("You failed.");
        break;
    default:
        console.log(grade, "is not a letter grade.")
}