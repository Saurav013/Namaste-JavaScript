/*

Logic of DisCount Calculator

*/

function calculate_discount() {
  let cost_of_item = Number(prompt("Enter the Price of Item : "));
  let final_price;

  if (cost_of_item < 100) {
    final_price = cost_of_item;
    alert(
      `No Discount -> Discount Amount - Rs 0\nFinal Amount to be Paid: Rs ${final_price}`
    );
  } else if (cost_of_item >= 100 && cost_of_item <= 200) {
    let discount = cost_of_item * 0.1;
    final_price = cost_of_item - discount;
    alert(
      `10% Discount is Provided -> Discount Amount: Rs ${discount}\nFinal Amount to be Paid: Rs ${final_price}`
    );
  } else {
    let discount = cost_of_item * 0.2;
    final_price = cost_of_item - discount;
    alert(
      `20% Discount is Provided -> Discount Amount: Rs ${discount}\nFinal Amount to be Paid: Rs ${final_price}`
    );
  }
}
