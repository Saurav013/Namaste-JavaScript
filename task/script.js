// console.log("Hello World")

/*
     On a booking website, check if the User's age is valid for booking
     Age should be at least 18
     Write a condition to check and display a message "Eligible for Booking" if the user is 18 or if older "Not Eligible for booking" otherwise
*/


/* TASK - 1 */


// let age = Number(prompt("Enter the age : "));

// let message = age >= 18 ? "Eligible for Booking" : "Not Eligible for Booking ";

// alert(message);

/* TASK - 2 */

let username = prompt("Enter the UserName : ");
let password = prompt("Enter the Password : ");

const result = (username && password) ? "Login Successful" : "username and Password are Required";

alert(result);