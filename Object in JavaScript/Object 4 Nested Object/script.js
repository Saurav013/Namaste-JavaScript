// Nested Object

const obj1 = {
  name : "Saurav",
  acc_no : 5616,
  acc_balance: 4000,
  address : {
    city : "Patna",
    location : "Pcs",
    pincode : 800027,
  }
};

// console.log(obj1);
// console.log(obj1.address);
// console.log(obj1.address.city);
// console.log(obj1.address.pincode);

// Modification in Nested Object

// obj1.address.pin = 848501;
// console.log(obj1.address.pin);


// Destructing Object - Destructuring is a shortcut to extract values from an object and store them in variables quickly.

// Without Destructing 

/*
const user = {
  name : "Saruav",
  age : 22,
  country : "India"
};

const username = user.name;
const userage = user.age;
const usercountry = user.country;

console.log(username);
console.log(userage);
console.log(usercountry);

Note - long and repetitive work
*/

// with Destructing of the Object

const user = {
  name : "Saurav",
  age : 22,
  country : "India",
  pincode : 848501,
};

// const {name,age,country} = user;

// console.log(name);
// console.log(age);
// console.log(country);


// Extra Feature


// 1. Can Rename the variables 

// const {name:username} = user;
// console.log(username);

// const {age,country} = user;
// console.log(age,country);

// Feature 2 - Set Default Values

// const {country = "Unknown"} = user;
// console.log(country);

const {name,age,...obj} = user;
console.log(name,age);
console.log(obj);

// Destructin of Array

const arr = [3,4,1,9];

// const [first,second] = arr;
// const [first,second, , third] = arr;
const [first,second,...third] = arr;
console.log(first,second,third);
