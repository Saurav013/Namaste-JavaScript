// Subscription Access Checker

// let has_subscription = true;
// let subscription_type = "premium";
// let result = "";
// if (has_subscription) {
//   if (subscription_type === "premium") {
//     result = "Access to All Content";
//   } else if (subscription_type == "standard") {
//     result = "Access to Limited Content";
//   } else {
//     result = "Unknown Subscription Type";
//   }
// } else {
//   result = "Please Subscribe to Access Content";
// }

// document.getElementById("result").innerHTML = result;

function checkSubscription() {
  
  const subscriptionType = document.getElementById("subscriptionInput").value.toLowerCas();
  const hasSubscription = subscriptionType === "premium" || subscriptionType ==="standard";

  let result = "";

  if (hasSubscription) {
    if (subscriptionType === "premium") {
      result = "✅ Access to all content.";
    } else if (subscriptionType === "standard") {
      result = "✅ Access to limited content.";
    } else {
      result = "⚠️ Unknown subscription type.";
    }
  } else {
    result = "❌ Please subscribe to access content.";
  }

  document.getElementById("result").innerText = result;
}
