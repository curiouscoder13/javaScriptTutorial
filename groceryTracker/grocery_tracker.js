let grocery1;
let grocery2;
let grocery3;

function calculateTotalAmount() {
  grocery1 = document.getElementById("grocery1").value;
  grocery2 = document.getElementById("grocery2").value;
  grocery3 = document.getElementById("grocery3").value;

  let totalAmount =
    parseFloat(grocery1) + parseFloat(grocery2) + parseFloat(grocery3);
  document.getElementById(
    "totalAmount"
  ).innerText = `The total amount is:$ ${totalAmount.toFixed(2)}`;
}
