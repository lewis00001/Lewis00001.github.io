// sets the value of the date in the storm center form to the current date
const date = new Date().toISOString().slice(0, 10);
document.getElementById("storm-date").setAttribute("value", date);

// update stormcenter range number when adjusted
let elem = document.querySelector('input[type="range"]');

let rangeValue = function(){
  let newValue = elem.value;
  let target = document.querySelector('#storm-r-value');
  target.innerHTML = newValue;
}

elem.addEventListener("input", rangeValue);
