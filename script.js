const numberA = document.querySelector(".number_A");
const numberB = document.querySelector(".number_B");

const sumButton = document.querySelector(".sum");
const subButton = document.querySelector(".sub");
const divButton = document.querySelector(".div");
const mulButton = document.querySelector(".mul");
const modButton = document.querySelector(".mod");

sumButton.addEventListener("click", addAandB);

function addAandB() {
  const sumResult = +numberA.value + +numberB.value;
  document.querySelector(
    "h3"
  ).innerText = `${numberA.value} + ${numberB.value} =${sumResult}`;
}

subButton.addEventListener("click", subAandB);

function subAandB() {
  const subResult = +numberA.value - +numberB.value;
  document.querySelector(
    "h3"
  ).innerText = `${numberA.value} - ${numberB.value} =${subResult}`;
}

divButton.addEventListener("click", divAandB);

function divAandB() {
  const divResult = +numberA.value / +numberB.value;
  document.querySelector(
    "h3"
  ).innerText = `${numberA.value} / ${numberB.value} =${divResult}`;
}

mulButton.addEventListener("click", mulAandB);

function mulAandB() {
  const mulResult = +numberA.value * +numberB.value;
  document.querySelector(
    "h3"
  ).innerText = `${numberA.value} * ${numberB.value} =${mulResult}`;
}

modButton.addEventListener("click", modAandB);

function modAandB() {
  const modResult = +numberA.value % +numberB.value;
  document.querySelector(
    "h3"
  ).innerText = `${numberA.value} % ${numberB.value} =${modResult}`;
}

const clearButton = document.querySelector(".clear_button");
clearButton.addEventListener("click", () => {
  document.querySelector("h3").innerText = "";
  numberA.value = "";
  numberB.value = "";
});

