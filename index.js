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
    console.log(typeof el.value, el.value);
    if (!/[0-9]+/.test(el.value)) {
      el.value = 1;
    }
    const amount = parseInt(el.value);
    const price = parseInt(prices[i].textContent);
    totalPrice += amount * price;
  });

  return totalPrice;
};

// const sumPrices = () => {
//   const prodAmounts = document.querySelectorAll('input');
//   const prodPrices = document.querySelectorAll('.price');
//   let totalPrice = 0;

//   prodAmounts.forEach((el, index) => {

//     if (!/[0-9]+/.test(el.value)) {
//       el.value = 1;
//     }
//     const amount = parseInt(el.value);
//     const price = parseInt(prodPrices[index].textContent);

//     totalPrice += amount * price;
//   });

//   return totalPrice;
// };

function showSum() {
  const currencie = 'zł';
  summary.textContent = `${updateSum()} ${currencie}`;
  return;
}
function deleteProduct(e) {
  e.target.closest('.product').remove();
  console.log(showSum());
  showSum();
}
document.querySelectorAll('input').forEach(item => {
  item.addEventListener('change', showSum);
});

crosses.forEach(cross => {
  cross.addEventListener('click', deleteProduct);
});

showSum();
