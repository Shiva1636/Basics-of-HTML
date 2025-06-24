//primitive data types
let number = 42; //number
let string = "Hello"; //string
let boolean = true; //Boolean
let undefinedvar; //Undefined (not assigned a value)
let  nullvar = null; //null
let symbolvar = Symbol("unique"); // Symbol
let bigIntvar = BigInt(123456789153355654890);


//non-primitive data types
let objectvar = {key: "value"};
let arrayvar = [1, 2, 3, 4, 5];
let functionvar = function() {return  "I am a function";  }

let object2={
    //adding muliple key-value pairs
    name: "John Doe",
    age: 30,
    isEmpolyed: true,
    hobbies: ["reading", "writing", "gaming", "coading"]
}

console.log("Data Types in JavaScript: ");
console.log("Number:", number);
console.log("String:", string);
console.log("Boolean:", boolean);
console.log("Undefinedvar:", undefinedvar);
console.log("Nullvar:",  nullvar);
console.log("Symbolvar:", symbolvar);
console.log("BigIntvar:", bigIntvar);
console.log("Objectvar:", objectvar);
console.log("Arrayvar", arrayvar);
console.log("Functionvar:", functionvar);
console.log("Object2:", object2);