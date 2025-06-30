// let choice = "red";

// switch(choice){
//     case "red":
//         console.log("Red Colour");
//         break;
//     case "yellow":
//         console.log("Yello Colour");
//         break;
//     case "green":
//         console.log("Green Colour");
//         break;
//     case "white":
//         console.log("white Colour");
//         break;
//     case "blue" :
//         console.log("Blue Colour");
//         break;
//     default:
//         console.log("Invalid Colour");
// }

// Question 4 : Number Knock Game

// let computerGuess = 6;
// let guess = null;

// while (guess !== computerGuess) {
//   guess = Number(prompt("Guess a Number : "));
//   if (isNaN(guess)) {
//     alert("Not a Valid Guess,Please try again");
//   } else if (guess < computerGuess) {
//     alert("Guess Number is too Low,Please Try again...");
//   } else if (guess > computerGuess) {
//     alert("Guess Number is too high,please try again...");
//   } else {
//     alert("Congratulations.... Your Guess is Correct");
//   }
// }

// Question 5 : Simple Password Checker(Fixed Attempts)

// let password = "alpha";
// let no_of_attempt = 0;
// let user_password = null;

// while(password != user_password && no_of_attempt < 3){
//     user_password = prompt("Enter Password : ");
//     no_of_attempt++;
//     if(password !== user_password){
//         alert("Password is Wrong,Please Try again");
//     }else{
//         alert("Congratulations.. Your password is matched..");
//     }
// }

//     alert("No of Attempt is exhausted.. Please Try after while..");

// Question 6 : print the pattern

let n = 5;

for(let i = 1;i <= 5;i++){
    str = "";
    for(let j = 1;j <= i;j++){
        str = str + j + " ";
    }
    console.log(str);
}