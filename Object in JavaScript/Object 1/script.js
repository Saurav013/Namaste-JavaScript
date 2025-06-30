// Learning Object in JavaScript

// How to Create an Object

/* Method 1 - Using Object Literal (most Common way)

// Example 1

const InstaId = {
  UserId: "Usera@1234",
  Password: "Mahadev@12",
};

console.log(InstaId);
console.log(typeof InstaId);

Example 2

let Obj = {
  0: 420,
  name: "Saurav",      Note - Here Key is being Store as String -> "name" like this
  age: 25,
  gender: "Male",
  acc_balance: 50000,
  // account Number : 5616;  -> wrong way to declare key, Never give space in between
  // Instead of space declare as string like below
  "account Number" : 5616,
};

// console.log(Obj);
// Checking Typeof
// console.log(typeof Obj);

// How to access any data from Object
// Obj.name
// Obj.age

// console.log(Obj.name);
// console.log(Obj.age);
// console.log(Obj.gender);
console.log(Obj["name"]);  // -> Another way to access the Object data as string
// console.log(Obj["account Number"]);
// console.log(Obj["0"]);
console.log(Obj);
*/


/*

// Method 2 - Using new Keyword 

const Obj = new Object();  // -> Creation of Object Using new Keyword

console.log(Obj);  // -> Initially It's give empty object
// Property add

Obj.name = "Rohit";
Obj.age = 34;
Obj.gender = "Male";

console.log(Obj); // After puting some properties 

// Delete

delete Obj.age;

console.log(Obj); // -> Age will deleted Here

// Modify  -> Object value can be modified after while

Obj.name = "Saurav"; // Properties of an object can be changed
console.log(Obj);

*/
// Note - Object with const keyword can be changed because Object is being stored as reference in stack


/*
//  Method 3 - Using Class & Constructor (-> Very Rarely Used Method but Efficient for Large Data)

class Person{
  constructor(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

let p1 = new Person("Saurav",22,"Male");
let p2 = new Person("Ankita",20,"Female");

console.log(p1,p2);

*/

/*
     Accessing Object Properties

    (i) Using Dot Notation
      - Obj.name;
      - Obj.age;

    (ii) Using Square Bracket
      - console.log(Obj["name"]);
      - console.log(Obj["age"]);

*/

let Obj = {
  name : "Saurav",
  age : 20,
};

console.log(Obj);