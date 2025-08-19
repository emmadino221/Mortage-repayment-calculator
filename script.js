const loanAmount = document.getElementById("loan");
const loanTermyears = document.getElementById("mortage");
const annualInterestRate = document.getElementById("interest");

const emptyResult = document.querySelector(".empty-result");
const resultCalculation = document.querySelector(".result-calculation");
const btn = document.querySelector("button");
const clear = document.querySelector(".clear");

btn.addEventListener("click", function () {
  const loan = Number(loanAmount.value);
  const loanYears = Number(loanTermyears.value);
  const interestRate = Number(annualInterestRate.value);

  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayment = loanYears * 12;

  const totalMonthlypayment = monthlyPayment(
    loan,
    monthlyInterestRate,
    numberOfPayment
  );

  document.querySelector(".result-cal").textContent = "$" + totalMonthlypayment;
  const totalAmount = numberOfPayment * totalMonthlypayment;
  document.querySelector("h6").textContent = "$" + totalAmount.toFixed(2);

  emptyResult.classList.toggle("hidden");
  resultCalculation.classList.toggle("hidden");
});

clear.addEventListener("click", function () {
  document.getElementById("loan").value = "";
  document.getElementById("mortage").value = "";
  document.getElementById("interest").value = "";
  resultCalculation.classList.add("hidden");
  emptyResult.classList.remove("hidden");
});

// function for the monthly payment

function monthlyPayment(loanAmount, monthlyInterestRate, numberOfPayment) {
  const calculation =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfPayment)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayment) - 1);
  return calculation.toFixed(2);
}
