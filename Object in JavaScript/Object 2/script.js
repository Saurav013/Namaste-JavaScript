/*                               Common Method for Objects                            */


let Obj = {
  name : "Saurav",
  age : 22,
  gender : "Male",
  acc_number : 5616
};

/* (i) Method 1 Object.keys() -> For knowing the Keys of the Object

console.log(Object.keys(Obj));

// Or we can store it into an array

let arr = Object.keys(Obj);
console.log(arr);
console.log(arr[2]);

*/

/* (ii) Method 2 - Object.values()

console.log(Object.values(Obj));

let arr = Object.values(Obj);
console.log(arr);
console.log(arr[2]);

*/

/* Method 3 - Object.entries() -> To know the key as well as values in an array

// console.log(Object.entries(Obj));
// let arr = Object.entries(Obj);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

*/

// Method 4 - Object.assign() -> Copies properties from one or more source Objects to a target Object.

/*  for Example 
            const obj1 = {a:1,b:2};
            const obj2 = {c:3,d:4};

            want to do like this 
            {
                   a:1,
                   b:2,
                   c:3,
                   d:4
            }
            const obj3 = Object.assign(obj1,obj2);
*/

const obj1 = {
  a: 1,
  b: 2
};
const obj2 = {
  c: 3,
  d: 4,
};

// const obj3 = Object.assign(obj1,obj2);
// console.log(obj3);
// console.log(obj1); // Here object1 is also changed due to assign
// To avoid changing in obj1,we need to give a target object where it can changed

// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);
// console.log(obj1);
const obj4 = {
  e:5,
  f:6,
};

// const obj3 = Object.assign({},obj1,obj2,obj4);
// console.log(obj3);

// SPREAD OPERATION -> It spread the things in individual items

// const obj3 = {...obj1,...obj2,...obj4};
// console.log(obj3);


// Method 5 : Object.freeze()

const person = {
  name: "Saurav",
  age: 21
};

// Freeze the object
Object.freeze(person);

// Try to change values
person.age = 25;

// Try to add new property
person.city = "Delhi";

// Try to delete property
delete person.name;

console.log(person);


// 🔍 Notes:
// Object.freeze() is shallow — it only freezes the top-level properties.

// If an object has nested objects, those can still be changed, unless they are frozen too.

const user = {
  name: "Ankita",
  address: {
    city: "Pune"
  }
};

Object.freeze(user);
user.address.city = "Mumbai"; // This will still work!

console.log(user.address.city); // Mumbai


// Method 6 - Object.seal()
// The Object.seal() method seals an object, which means:

// ✅ You can change the values of existing properties.

// ❌ You cannot add new properties.

// ❌ You cannot delete existing properties.

// ❌ You cannot change the structure of the object.

// In short:

// You can update, but not add or delete anything from the object.

const car = {
  brand: "Toyota",
  model: "Corolla"
};

// Seal the object
Object.seal(car);

// Update existing property
car.model = "Camry";

// Try to add new property
car.year = 2024;

// Try to delete a property
delete car.brand;

console.log(car);

