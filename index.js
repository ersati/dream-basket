// Import stylesheets
import "./style.css";

const input = document.querySelectorAll("input");

console.log(input);

function updateSum() {}

input.forEach(item => {
  item.addEventListener("change", updateSum);
});

console.log(document.getElementById("in1").nextElementSibling);
