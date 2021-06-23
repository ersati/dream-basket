// Import stylesheets
import './style.css';

const summary = document.querySelector('.total');
const products = document.querySelectorAll('.product');
const crosses = document.querySelectorAll('.cross');

const updateSum = () => {
  const inputs = document.querySelectorAll('input');
  const prices = document.querySelectorAll('.price');
  let totalPrice = 0;
  inputs.forEach((el, i) => {
    if (!/[0-9]+/.test(el.value)) {
      el.value = 1;
    }
    const amount = parseInt(el.value);
    const price = parseInt(prices[i].textContent);
    totalPrice += amount * price;
  });
  return totalPrice;
};

function showSum() {
  const currencie = 'zł';
  summary.textContent = `${updateSum()} ${currencie}`;
  if (updateSum() === 0) {
    summary.textContent = 'Nothing in the basket';
  }
  return;
}

function deleteProduct(e) {
  e.target.closest('.product').remove();
  showSum();
}

document.querySelectorAll('input').forEach(item => {
  item.addEventListener('change', showSum);
});

crosses.forEach(cross => {
  cross.addEventListener('click', deleteProduct);
});

showSum();
