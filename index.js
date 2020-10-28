// Import stylesheets
import "./style.css";

const inputs = document.querySelectorAll("input");
const prices = document.querySelectorAll(".price");
const tot = document.querySelector(".total");
console.log();

function updateSum() {
  inputs.forEach((el, i) => {
    let price = prices[i].innerHTML.match(/(\d+)/);
    console.log(prices[i].innerHTML.match(/(\d+)/));
    let number = price[i];
    console.log(el);
    let total = el * number;

    tot.textContent = total;
  });
}

inputs.forEach((item, index) => {
  item.addEventListener("change", updateSum);
});

console.log(document.getElementById("in1").nextElementSibling);
