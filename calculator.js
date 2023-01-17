window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount = document.getElementById("loan-amount");
  loanAmount.value = "100";

  const loanYears = document.getElementById("loan-years");
  loanYears.value = "2";

  const loanRate = document.getElementById("loan-rate");
  loanRate.value = "10";

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValue = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValue));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = values.rate / 100 / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow(1 + monthlyRate, -n))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let element = document.getElementById("monthly-payment");
  if (monthly === 0) {
    return (element.innerText = "$00.00");
  } else {
    element.innerText = "$" + monthly;
  }
}
