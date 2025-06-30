// // let n = 5;

// // let sum = 0;

// // for(let i = 0;i < n;i++){
// //     sum += i;
// // }

// // console.log("Sum : ",sum);

// // Function is like a machine in which we give the input and it returns the output

// function sumN(n){
//     let sum = 0;
//     for(let i = 0;i < n;i++){
//         sum+= i;
//     }
//     console.log("Sum : ",sum);
// }

// sumN(5);
// sumN(15);

// function greet(){
//     console.log("Hello World, This is my first Function in JavaScript");
// }

// greet();

// function myfun(name){                              -> NORMAL FUNCTION
//     console.log(`Hello world, This is ${name}`);
// }

// myfun("Saurav");
// myfun("Ankita");

// let myfun = ()=>{                                    -> KNOWN AS FAT ARROW FUNCTION
//     console.log("Hello World");
// }

// myfun();

// let sum = (a,b)=>{
//     return a + b;
// }

// let a = sum(4,5);
// console.log(a);

// let threesum = (a,b,c)=>{
//     console.log(`Sum of Three Number : ${a+b+c}`);
// }

// threesum(3,4,5);


/* Anomanoums Function */

// setTimeout(()=>{
//     console.log("Hello World");
// },3000);

// setTimeout(function() {
//     console.log("Hey Ram")
// }, 3000);

// setTimeout((name ="Hare Krishna") => {
//     console.log(`My Name is ${name}`);
// }, 3000);

/* Immediately Invoked function expression */

// (function(){
//     console.log("Hello World");
// })();

// Question 1 - Capitalize the first letter of a string


function capitalize_first_letter(str){
    console.log(str.charAt().toUpperCase() + str.slice(1))
}


capitalize_first_letter("saurav");
capitalize_first_letter("this is saurav kumar learning javascript");