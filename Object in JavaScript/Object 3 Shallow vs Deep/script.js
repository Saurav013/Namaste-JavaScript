// Shallow Copy v/s DEEP Copy in JavaScript

// SHALLOW COPY - Only copies the first layer (top-level) of an object. Nested objects still point to the same memory.

/* Example 1 - 

const original = {
  name: "Saurav",
  details: {
    age: 22
  }
};

const shallowCopy = { ...original };

shallowCopy.details.age = 25;

console.log(original.details.age); // 25 😱 (changed!)
*/

/* Example 2 - */

const obj1 = {
  a : 10,
  b : 2,
};

const obj2 = obj1;
console.log(obj2,obj1);
obj2.a = 999;
console.log(obj2,obj1);

// Deep Copy - Copies everything, including all nested objects. So they are completely independent.

/* Example 1 
const obj = {
  name: "Saurav",
  details: {
    age: 22
  }
};

const deepCopy = JSON.parse(JSON.stringify(obj));

deepCopy.details.age = 25;

console.log(obj.details.age); // 22 😌 (safe!)

*/

/* Example 2 */

const obj3 = structuredClone(obj1);
console.log(obj3,obj1);
obj3.a = 34;
console.log(obj3,obj1);