"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Hello World Problem
let greeting = "Hello World!"; //Assigned Hello World! to a variable greeting.
console.log(greeting); // Printed greeting to the console.
// 2.Basic Maths
let num1, num2; //Declared two variables num1 and num2.
num1 = 10; //Assigned 10 to num1.
num2 = 50; //Assigned 20 to num2.
console.log(num1 + num2); //Printed the sum of num1 and num2.
console.log(num1 - num2); //Printed the difference of num1 and num2.
console.log(num1 * num2); //Printed the product of num1 and num2.
console.log(num1 / num2); //Printed the quotient of num1 and num2.
// 3.Swapping Values
let a = 1; // Initialized a with value 1
let b = 2; // Initialized b with value 2
a = a + b; // 1+2 =3
b = a - b; // now b = 3 - 2 = 1 that is originally = a
a = a - b; // now a has value 3 - 1 = 2 that is original value of b
console.log(a);
console.log(b);
//4. Type Annotation (TypeScript)
// let message : string; // declared message as string
// message = 10;// showing error because we are trying to assign a number to a string variable.
// console.log(message); // prints 10
//5. Modulus Operator
let number1, number2;
number1 = 10;
number2 = 5;
console.log(number1 % number2); // prints 0
console.log(number2 % number1); // prints 5
// 6. Increment Challenge
let counter = 0;
counter = counter + 1; // Incrementing 1 by addition
counter++; // Incrementing 1 by incremental operator
console.log(counter); // prints 2
//7. Logical Gates
let a1 = true, b1 = false, c1 = true;
console.log(a1 && b1 && c1); // prints false
console.log(a1 || b1 || c1); // prints true
console.log(!a1); // prints false
console.log(!b1); // prints true
console.log(!c1); // prints false
//8. Compound Assignment
let num = 10;
num += 5; // num = num + 5
console.log(num); // prints 15
num -= 5; // num = num - 5
console.log(num); // prints 10
num *= 5; // num = num * 5
console.log(num); // prints 50
num /= 5; // num = num / 5
console.log(num); // prints 10
//9. Even or Odd
let numForCheck;
numForCheck = 10;
if (numForCheck % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
console.log(numForCheck); // prints 10  
//10. Voting Eligibility
let age;
age = 20;
if (age >= 18) {
    console.log("Eligible to Vote");
}
else {
    console.log("Not Eligible to Vote");
}
//11. Grading System
let score = 90;
if (score >= 90) {
    console.log("A");
}
else if (score >= 80) {
    console.log("B");
}
else if (score >= 70) {
    console.log("C");
}
else if (score >= 60) {
    console.log("D");
}
else {
    console.log("F");
}
//12. Max of Three
let x, y, z; // Determine the largest among these.
x = 10;
y = 20;
z = 30;
if (x > y && x > z) { // check if x is greater than both y and z
    console.log(x);
}
else if (y > x && y > z) { //check if y is greater than both x and z
    console.log(y);
}
else {
    console.log(z); // otherwise z is greater
}
//13. Leap Year Checker
let year;
year = 2024;
if (year % 4 == 0) {
    console.log("Leap Year");
}
else {
    console.log("Not a Leap Year");
}
//14. Fahrenheit to Celsius Converter
let fahrenheit;
fahrenheit = 100;
let celsius = (fahrenheit - 32) * 5 / 9;
console.log(celsius); // prints 37.77777777777778
console.log(fahrenheit); // prints 100
// 15. Positive, Negative, or Zero
let numberToCheckSign;
numberToCheckSign = 10;
if (numberToCheckSign > 0) {
    console.log("Positive");
}
else if (numberToCheckSign < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}
// 16. Multiplication Table
let numberToPrintTable = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${numberToPrintTable} X ${i} = ${numberToPrintTable * i}`);
}
