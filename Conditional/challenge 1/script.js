/*

Write a program where:
If the cart value is less than 50, no discount is applied.
If the cart value is between 50, apply a 10% discount.
If the cart value is more than 100,apply a 20% discount
Display the Final cart total after the discount.

*/

let cartValue = 200;
let final_price;

if (cartValue < 50) {
  final_price = cartValue;
  console.log("No Discount");
  console.log("Total Discount Amount : ",0)
} else if (cartValue > 50 && cartValue <= 100) {
  final_price = cartValue - cartValue * 0.1;
  console.log("Total Discount Amount : ",cartValue * 0.1);
  console.log("A 10% discount has been applied");

} else {
  final_price = cartValue - cartValue * 0.2;
  console.log("Total Discount Amount : ",cartValue * 0.2);
  console.log("20 % Discount is applied");
}

console.log("Final CartValue : ", final_price);
