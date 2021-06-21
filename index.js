// Import stylesheets
import './style.css';

const inputs = document.querySelectorAll('input');
const prices = document.querySelectorAll('.price');
const summary = document.querySelector('.total');
const products = document.querySelectorAll('.product');
const crosses = document.querySelectorAll('.cross');
let totalPrice = 0;

console.log(inputs, prices);

function updateSum() {
  console.log(inputs.length);
  totalPrice = 0;
  inputs.forEach((el, i) => {
    console.log(el);
    const price = prices[i].innerHTML.match(/(\d+)/)[i];

    totalPrice += el.value * price;
    console.log(totalPrice);
  });

  return totalPrice;
}

function showSum() {
  const currencie = 'zł';
  summary.textContent = `${updateSum()} ${currencie}`;
  return;
}

inputs.forEach(item => {
  item.addEventListener('change', showSum);
});

crosses.forEach(cross => {
  cross.addEventListener('click', e => {
    

    e.target.closest('.product').remove();
    summary.textContent = updateSum();
  });
});

showSum();
