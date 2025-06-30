// let temp = 3;

// if(temp > 30){
//     console.log("It's hot OutSide");
// }else{
//     console.log("Nice weather");
// }

// let age = 22
// age = 14;
// if(age >= 18){
//     console.log("You Can Drive the Car");
// }else{
//     console.log("Can't Drive the Car");
// }

// Nested if else

// let age = 22;
// let hasId = true;
// if(age >= 18){
//     if(hasId){
//         console.log("You are Eligible in Club");
//     }else{
//         console.log("No,You don't have Id Card");
//     }
// }else{
//     console.log("You are Not Eligible in Club");
// }

// Secrrity Concern

/*
let username = "Saurav_x13";
let password = "Saurav@1321";

let db_username = "Saurav_x13";
let db_password = "Saurav@1321";

if(username){
    if(password){
        if(username === db_username){
            if(password === db_password){
                console.log("Login Successful");
            }else{
                console.log("Invalid Password");
            }
        }else{
            console.log("Invalid User");
        }
    }else{
        console.log("Password is Required");
    }
}else{
    console.log("UserName is Required");
}

*/

/*

let username = "Saurav";
let password = "12345";

let db_username = "Saurav";
let db_password = "12345";

if (
  username &&
  password &&
  username === db_username &&
  password === db_password
) {
  // console.log("Login Successfull");
  console.log("Login Successfull");
} else {
  // console.log("Invalid Username and Password");
  console.log("Invalid password & UserName");
}

*/

// Switch Case

let color = "red";

switch(color){
    case "red":
    console.log("red");
    break;

    case "yellow":
    console.log("yellow");
    break;

    case "blue":
    console.log("Blue");
    break;

    case "green":
    console.log("Green");
    break;

    default:
        console.log("Invalid Color");
}
   
