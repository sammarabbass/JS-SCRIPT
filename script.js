
let num1 = Number(prompt("Enter a number (Positive / Negative / Zero):"));

let result1 =
  isNaN(num1) ? "Invalid input"
  : num1 > 0 ? "Positive"
  : num1 < 0 ? "Negative"
  : "Zero";

alert(result1);
console.log(result1);


let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));

let result2 =
  a > b ? "First number is greater"
  : a < b ? "Second number is greater"
  : "Both are equal";

alert(result2);
console.log(result2);


let numb = prompt("Enter a number (Even / Odd):");

let result3 =
  isNaN(numb) || numb === "" ? "Invalid input"
  : Number(numb) % 2 === 0 ? "EVEN"
  : "ODD";

alert(result3);
console.log(result3);


let age = Number(prompt("Enter your age:"));

let result4 =
  isNaN(age) ? "Invalid input"
  : age < 13 ? "Child"
  : age <= 19 ? "Teenager"
  : age <= 59 ? "Adult"
  : "Senior Citizen";

alert(result4);
console.log(result4);


let salary = Number(prompt("Enter salary:"));

let bonus =
  isNaN(salary) ? 0
  : salary < 50000 ? salary * 0.20
  : salary <= 100000 ? salary * 0.10
  : 0;

alert(`Your bonus is: $${bonus.toFixed(2)}`);
console.log(`Your bonus is: $${bonus.toFixed(2)}`);


let type = prompt("Customer type (member / non-member):").toLowerCase();
let amount = Number(prompt("Enter purchase amount:"));

let discountRate =
  type === "member"
    ? amount < 100 ? 0.05
      : amount <= 500 ? 0.10
      : 0.20
    : amount <= 500 ? 0.02
      : 0.05;

let discount = amount * discountRate;
let finalPrice = amount - discount;

alert(`Discount: $${discount.toFixed(2)}\nFinal Price: $${finalPrice.toFixed(2)}`);
console.log(discount, finalPrice);


let user = prompt("Enter rock, paper, or scissors:").toLowerCase();
let choices = ["rock", "paper", "scissors"];
let computer = choices[Math.floor(Math.random() * 3)];

let result8 =
  user === computer ? "It's a tie!"
  : (user === "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "paper") ||
    (user === "paper" && computer === "rock")
  ? "You win!"
  : "You lose!";

alert(`You chose: ${user}\nComputer chose: ${computer}\nResult: ${result8}`);
console.log(result8);


let signal = prompt("Enter traffic signal (Red / Yellow / Green):");

let action =
  signal === "Red" ? "Stop"
  : signal === "Yellow" ? "Get ready"
  : signal === "Green" ? "Go"
  : "Invalid signal";

alert(action);
console.log(action);


let x = Number(prompt("Enter first number:"));
let y = Number(prompt("Enter second number:"));
let z = Number(prompt("Enter third number:"));

let largest =
  x > y ? (x > z ? x : z)
  : (y > z ? y : z);

alert("Largest number is: " + largest);
console.log(largest);


let year = Number(prompt("Enter year:"));

let result11 =
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  ? "Leap Year"
  : "Not a Leap Year";

alert(result11);
console.log(result11);


let input = prompt("Enter a number:");
let n = Number(input);

let result12 =
  isNaN(n) ? "Invalid input"
  : n > 0 ? "Positive number"
  : n === 0 ? "Zero"
  : "Negative number";

alert(result12);
console.log(result12);


let password = prompt("Enter password:");

let strength =
  password.length < 6 ? "Weak password"
  : password.length <= 10 ? "Moderate password"
  : "Strong password";

alert(strength);
console.log(strength);


let nume = Number(prompt("Enter a number:"));

let result14 =
  nume % 2 === 0 && nume % 3 === 0 ? "Divisible by both"
  : nume % 2 === 0 ? "Divisible by 2"
  : nume % 3 === 0 ? "Divisible by 3"
  : "Not divisible by 2 or 3";

alert(result14);
console.log(result14);


let attendance = Number(prompt("Enter attendance percentage:"));
let marks = Number(prompt("Enter marks:"));

let result15 =
  attendance < 75 && marks < 40 ? "Fail due to both"
  : attendance < 75 ? "Poor attendance"
  : marks < 40 ? "Fail"
  : "Pass";

alert(result15);
console.log(result15);
