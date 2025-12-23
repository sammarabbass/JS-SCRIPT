// Primitive types
let str = "Hello";
let num = 10;
let bool = true;
let nul = null;
let undef = undefined;
let big = 12345678901234567890n;
let sym = Symbol("id");

// Print typeof each
console.log(typeof str);     // string
console.log(typeof num);     // number
console.log(typeof bool);    // boolean
console.log(typeof nul);     // object (JS bug/legacy behavior)
console.log(typeof undef);   // undefined
console.log(typeof big);     // bigint
console.log(typeof sym);     // symbol


// Non-primitive types
let obj = { name: "Ali", age: 20 };
let arr = [1, 2, 3];

console.log(typeof obj); // object
console.log(typeof arr); // object
 

// Const array
const numbers = [1, 2, 3];
numbers.push(4); // allowed
console.log(numbers); // [1, 2, 3, 4]

// Const string
const text = "Hello";
text[0] = "J";
console.log(text); // Hello (unchanged)


const student = {
  name: "Ali",
  age: 20
};

// Change property (allowed)
student.name = "Sara";
console.log(student);

// Reassign object (NOT allowed)
// student = { name: "Ahmed", age: 22 }; // ❌ Error


let greeting = "Hello";
greeting[0] = "J";
console.log(greeting); // Hello


console.log("5" == 5);   // true (type conversion)
console.log("5" === 5);  // false (strict comparison)
console.log(null == undefined);  // true

let a = 5;

console.log(++a); // 6 (increment first)
console.log(a);   // 6

let b = 5;
console.log(b++); // 5 (use first)
console.log(b);   // 6


let price = 100;
let discount = 20;

// Discounted price
let finalPrice = price - discount;
console.log(finalPrice); // 80

// Add tax
price += 5;
console.log(price); // 105


let name = prompt("Enter your name:");
alert("Hello, " + name + "!");

let choice = confirm("Do you want to delete this file?");

if (choice) {
  alert("File deleted");
} else {
  alert("File not deleted");
}
let ageInput = prompt("Enter your age:");
let age = Number(ageInput);
if (isNaN(age)) {
    alert("Please enter a valid number for age.");
} else {
    alert("You are " + age + " years old.");
}
    let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Choose operation (+, -, *, /)");

let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else {
  alert("Invalid operator");
}

alert("Result: " + result);


alert("⚠️ Warning: You are about to exit!");
