window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {loanAmount: 165000, loanYears: 30, loanRate: 3};
  
  let defLoanAmount = document.getElementById("loan-amount");
  let defLoanYears = document.getElementById("loan-years");
  let defLoanRate = document.getElementById("loan-rate");

  defLoanAmount.value = values.loanAmount;
  defLoanYears.value = values.loanYears;
  defLoanRate.value = values.loanRate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
 let currentValues = getCurrentUIValues();
 updateMonthly(calculateMonthlyPayment(currentValues))

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  
  if(values.rate === 0 && values.years === 0 && values.amount === 0) return '0' 
  
  if(values.rate === 0){
    return Math.floor(values.amount / (values.years * 12) ).toFixed(2)
  }
 
  let periodicRate = (values.rate / 100) / 12;
  let totalPayments = Math.floor(values.years * 12);
  return (
    (periodicRate * values.amount) /
    (1 - Math.pow((1 + periodicRate), -totalPayments))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPaymentArea = document.getElementById("monthly-payment");
  monthlyPaymentArea.innerText = `is calculated to be $` + monthly;
}
