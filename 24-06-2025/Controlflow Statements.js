//control statements In JavaScript

let age = 18;
if (age < 18) {
    console.log("You are a minor.");
}
else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
}
else {
    console.log("You are a senior Citizien.")
}

console.log("\n");


//switch case
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Satursday");
        break;
    default:
        console.log("Invalid day");
}
console.log("\n");

// 2.Loops

    //For Loop
for(let i = 0; i < 5; i++){
    console.log("Iteration: ", i);
}


//While Loop
let j = 0;
while( j < 5) {
    console.log("While Loop Iteration: ", j);
    j++;
}
console.log("\n");


//Do While Loop
let k = 0;
do{
    console.log("Do... While Loop Iteration: ", k);
    k++;
}while(k < 5);