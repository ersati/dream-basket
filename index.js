// Import stylesheets
import "./style.css";

const inputs = document.querySelectorAll("input");
const prices = document.querySelectorAll(".price");
const tot = document.querySelector(".total");
// console.log();
let t = 0;
function updateSum(index) {
  tot.textContent = t;
  // inputs.forEach((el, i) => {
  //   let price = prices[i].innerHTML.match(/(\d+)/);
  //   // console.log(prices[i].innerHTML.match(/(\d+)/));
  //   let number = price[i];
  //   // console.log(el.value);
  //   let total = el.value * number;

    
  // });
}

inputs.forEach((item, index) => {
  inputs.forEach((el, i) => {
    const price = prices[i].innerHTML.match(/(\d+)/)[i];
    console.log((el.value * price))
    t += el.value * price;
  });
  item.addEventListener("change", updateSum);
});

console.log(document.getElementById("in1").nextElementSibling);
