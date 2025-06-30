// Shallow Copy v/s DEEP Copy in JavaScript

// SHALLOW COPY - Only copies the first layer (top-level) of an object. Nested objects still point to the same memory.

const original = {
  name: "Saurav",
  details: {
    age: 22
  }
};

const shallowCopy = { ...original };

shallowCopy.details.age = 25;

console.log(original.details.age); // 25 😱 (changed!)


// Deep Copy - Copies everything, including all nested objects. So they are completely independent.

const obj = {
  name: "Saurav",
  details: {
    age: 22
  }
};

const deepCopy = JSON.parse(JSON.stringify(obj));

deepCopy.details.age = 25;

console.log(obj.details.age); // 22 😌 (safe!)
