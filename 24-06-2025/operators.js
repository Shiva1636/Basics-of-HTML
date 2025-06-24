//1. arithmetic opertors
let a = 10;
let b = 20;
console.log("Arithmetic operators: ");
console.log("a = ", a, " " , "b = ", b);
let sum = a + b;
let differnce = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let exponentent = a ** b;

console.log("sum: ", sum);
console.log("sub:" , differnce);
console.log("Mul:", product);
console.log("quotient:", quotient);
console.log("reminder:", remainder);
console.log("power:", exponentent);

//2. assignment operators 
let x = 10;
console.log(x += 5);
console.log(x -= 3);
console.log(x *= 2);
console.log(x /= 4);
console.log(x %= 3);
console.log("Assignment Operators:");
console.log("x After Assignment: ", x);
console.log("\n");


//3.comparision operaators 
let isEqual = (a == b);
let isStrictEqual = (a === b);
let isNotEqual  = (a != b);
let isGreaterThan = (a > b);
let isLessThan = (a < b);
let isGreaterThanOrEqual = (a >= b);
let isLessThanOrEqual = (a <= b);
console.log("Comparision Operators: ");
console.log("Is Equal: ", isEqual);
console.log("Is strict equal: ", isStrictEqual);
console.log("Is Not Equal", isNotEqual);
console.log("Is greater than", isGreaterThan);
console.log("Is less than: ", isLessThan);
console.log("is greater than or equal", isGreaterThanOrEqual);
console.log("is less than or equal: ",isLessThanOrEqual);
console.log("\n")



//logical operators 
let andoperator = (a > 0 && b > 0);
let oroperator = (a > 0 || b < 0 );
let notoperator = !(a < b);
console.log("Logical Operators:");
console.log("AND Operator:", andoperator);
console.log("OR Operator:", oroperator);
console.log("NOT Operator:", notoperator);
console.log("\n");


//bitwise operators
let bitwiseAnd = a & b;
let bitwiseOr = a | b;
let bitwiseXor = a ^ b;
let bitwiseNot = ~a;
let leftShift = a << 1;
let rightShift = a >> 1;
console.log("Bitwise Operators: ");
console.log("Bitwise AND:", bitwiseAnd);
console.log("Bitwise OR:", bitwiseOr);
console.log("Bitwise XOR:" , bitwiseXor);
console.log("Bitwise NOT:", bitwiseNot);
console.log("Bitwise LeftShift:", leftShift);
console.log("Bitwise RightShift:", rightShift);
console.log("\n");


//ternary operator
let age = 18;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not Eligible to vote";
console.log("Ternary operator:");
console.log("Eligiblity: ", eligibility);
console.log("\n");


//7.Typeof operator
let varibleType = typeof a;
console.log("Typeof Operator: ");
console.log("Type os varibles 'a' :", varibleType);
console.log("\n");