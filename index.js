// Import stylesheets
import "./style.css";

const inputs = document.querySelectorAll("input");
const prices = document.querySelectorAll(".price");
const summary = document.querySelector(".total");
// console.log();
let t = 0;
function updateSum(index) {
  console.log("ok");
let totalPrice = 0
   inputs.forEach((el, i) => {
    console.log("second");
    const price = prices[i].innerHTML.match(/(\d+)/)[i];
    const amount = 
    // console.log(el.value * price)
    t = 0;
    t += el.value * price;
  });
  
  return totalPrice
  // inputs.forEach((el, i) => {
  //   let price = prices[i].innerHTML.match(/(\d+)/);
  //   // console.log(prices[i].innerHTML.match(/(\d+)/));
  //   let number = price[i];
  //   // console.log(el.value);
  //   let total = el.value * number;

  // });
}

function showSum (){
const currencie = 'zł'
summary.textContent = `${updateSum} ${currencie}`
}


inputs.forEach((item, index) => {
  item.addEventListener("input", updateSum);
  console.log("first");
 
});

// console.log(document.getElementById("in1").nextElementSibling);
