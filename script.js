const loanAmount = document.getElementById("loan");
const loanTermyears = document.getElementById("mortage");
const annualInterestRate = document.getElementById("interest");

const emptyResult = document.querySelector(".empty-result");
const resultCalculation = document.querySelector(".result-calculation");
const btn = document.querySelector("button");
const clear = document.querySelector(".clear");

// function for the monthly payment

function monthlyPayment() {
  const loan = Number(loanAmount.value);
  const loanYears = Number(loanTermyears.value);
  const interestRate = Number(annualInterestRate.value);

  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayment = loanYears * 12;

  const calculation =
    (loan *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfPayment)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayment) - 1);

  const totalMonthlypayment = calculation;
  return totalMonthlypayment.toFixed(2);
}

function numPayment() {
  const numberOfPayment = Number(loanTermyears.value) * 12;
  return numberOfPayment.toFixed(2);
}

// function to toggle empty resuly and result calculation

function result() {
  emptyResult.classList.toggle("hidden");
  resultCalculation.classList.toggle("hidden");
}

// function to clear all data

function clearData() {
  document.getElementById("loan").value = "";
  document.getElementById("mortage").value = "";
  document.getElementById("interest").value = "";
  resultCalculation.classList.toggle("hidden");
  emptyResult.classList.toggle("hidden");
}

// button clicked functionality

btn.addEventListener("click", function () {
  document.querySelector(".result-cal").textContent = "$" + monthlyPayment();
  const totalAmount = numPayment() * monthlyPayment();
  document.querySelector("h6").textContent = "$" + totalAmount.toFixed(2);
  result();
});

clear.addEventListener("click", function () {
  clearData();
});
