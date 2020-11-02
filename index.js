// Import stylesheets
import "./style.css";

const inputs = document.querySelectorAll("input");
const prices = document.querySelectorAll(".price");
const summary = document.querySelector(".total");

function updateSum() {
  let totalPrice = 0;
  inputs.forEach((el, i) => {
    const price = prices[i].innerHTML.match(/(\d+)/)[i];
    totalPrice += el.value * price;
  });
  return totalPrice;
}

function showSum() {
  const currencie = "zł";
  return (summary.textContent = `${updateSum()} ${currencie}`);
}

inputs.forEach(item => {
  item.addEventListener("change", showSum);
});
