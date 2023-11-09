"use strict"

window.onload = init;


function init () {
	 // Button to submit form
    const calculateBtn = document.getElementById ("calculateBtn")
    calculateBtn.onclick = calculateBtnclicked;  
};


function calculateBtnclicked (){
  // convert Values to Number
  const principal = Number(document.getElementById ("inputPrincipal").value);
  const interestRate = Number(document.getElementById ("inputInterest").value);
  const duration = Number(document.getElementById ("inputLoanLength").value);
  calculateMorgage (principal, interestRate, duration)

  //  Typeof helps see to dataTypes (NOT NEEDED BUT USEFUL)
 console.log(principal)
 console.log(typeof principal);
 console.log (interestRate)
 console.log (duration)

};

function calculateMorgage (principal, interestRate, duration) {
    // step 1 convert the annual interest rate into monthly intreset rate and put into decimal notation
		let monthlyInterestRate = (interestRate / 100) / 12; 
	// step 2 convert the loan length from years to months
		let loanLengthInMonths = duration * 12;
	// step 3 monthly payment formula
	let monthlyPayment = [principal *(monthlyInterestRate * (1 + monthlyInterestRate)**loanLengthInMonths)]
												/[(1 + monthlyInterestRate)** loanLengthInMonths - 1];

	// step 4 use monthly payment to calc total intrerest 
	let totalInterest = (monthlyPayment * loanLengthInMonths) - principal;
	// step 5 display output
	displayOutput (monthlyPayment, totalInterest);
};

																// as long as its the same position the arguments
																// will take the same paramter as long as it line up
 function displayOutput (monthlyPayment, totalInterest) {
    const outputMonthlyPayment = document.getElementById ("outputMonthlyPayment");
    const outputInterestPayed = document.getElementById ("outputTotalAmount");
	outputMonthlyPayment.value = monthlyPayment.toFixed(2);
	outputInterestPayed.value = totalInterest.toFixed(2);
 


};

 

