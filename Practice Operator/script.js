// Q1.  Get user to input two numbers using prompt and print their possible arithmetic values

/* let num1 = Number(prompt("Enter the First Number : "));
let num2 = Number(prompt("Enter the Second Number : "));


console.log("num1 + num2", num1 + num2);
console.log("num1 - num2", num1 - num2);
console.log("num1 * num2", num1 * num2);
console.log("num1 / num2", num1/num2);
console.log("num1 % num2", num1 % num2);
console.log("num1 ** num2", num1**num2);

*/

// Q2. Can you chain Assignment Operators

// let a = b = c = 50;

// console.log("a : ",a);
// console.log("b : ",b);
// console.log("c : ",c);

// Ans - Yes, we can declare as assignment operator

/* ---------------------------------------------------------------   */

// Q3. Get User to input a number using prompt and check whether even or odd using ternary operator

/*

let num = Number(prompt("Enter a Number : "));

const result = num % 2 == 0 ? "Even Number" : "Odd Number";

alert(result);
console.log(result);

*/

// Q4. Check if a number is within range between 10 and 20 (inclusive).

// let num = Number(prompt("Enter the Number : "));

// let result = (num >= 10 && num <= 20) ? ("Within Range") : ("Not in Range");

// alert(result);
// console.log(result);

// Q5. Write a program to find the larget number between 3 numbers using ternary numbers

// let a = Number(prompt("Enter the Value of a : "));
// let b = Number(prompt("Enter the Value of b : "));
// let c = Number(prompt("Enter the Value of c : "));

// const result = a > b ? (a > c ? a : c) : (b > c ? b : c);

// alert(result)
// console.log(result);

// Q6. Take an email and password from the user.if the email or password is incorrect or doesnot match the stored values. the message "Invalid email or password".if both email and password match the stored value display "LogIn Succesfull"

// Answer --
// firstly create password of database and username
let database_username = "srv_x13";
let database_password = "Saurav@1321";

// Now taking input from user
let username = prompt("Enter the UserName : ");
let password = prompt("Enter the Password : ");

const result =
  username &&
  password &&
  username === database_username &&
  password === database_password
    ? "Login Successful"
    : "Invalid UserName and Password";

alert(result);
console.log(result);
