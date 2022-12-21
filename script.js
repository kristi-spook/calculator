const numberA = document.querySelector(".number_A").value;
const numberB = document.querySelector(".number_B").value;

const sumButton = document.querySelector(".sum");
const subButton = document.querySelector(".sub");
const divButton = document.querySelector(".div");
const mulButton = document.querySelector(".mul");
const modButton = document.querySelector(".mod");

sumResult = +numberA + +numberB;
subResult = +numberA - +numberB;
divResult = +numberA / +numberB;
mulResult = +numberA * +numberB;
modResult = +numberA % +numberB;

sumButton.addEventListener("click", addAandB);

function addAandB() {
  document.querySelector(
    "h3"
  ).innerText = `${numberA} + ${numberB} =${sumResult}`;
}

subButton.addEventListener("click", subAandB);

function subAandB() {
  document.querySelector(
    "h3"
  ).innerText = `${numberA} - ${numberB} =${subResult}`;
}

divButton.addEventListener("click", divAandB);

function divAandB() {
  document.querySelector(
    "h3"
  ).innerText = `${numberA} / ${numberB} =${divResult}`;
}

mulButton.addEventListener("click", mulAandB);

function mulAandB() {
  document.querySelector(
    "h3"
  ).innerText = `${numberA} * ${numberB} =${mulResult}`;
}

modButton.addEventListener("click", modAandB);

function modAandB() {
  document.querySelector(
    "h3"
  ).innerText = `${numberA} % ${numberB} =${modResult}`;
}

const clearButton = document.querySelector(".clear_button");
clearButton.addEventListener("click", () => {
  document.querySelector("h3").innerText = "";
  document.location.reload();
});
