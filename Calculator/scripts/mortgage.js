"use strict"

window.onload = init;


function init () {
	 // Button to submit form
    const calculateBtn = document.getElementById ("calculateBtn")
    calculateBtn.onclick = calculateBtnclicked;
     // convert Values to Number
    const principal = Number(document.getElementById ("inputPrincipal").value);
    const interestRate = Number(document.getElementById ("inputInterest").value);
    const duration = Number(document.getElementById ("inputLoanLength").value);

	//  Typeof helps see to dataTypes
   console.log(principal)
   console.log(typeof principal);
   console.log (interestRate)
   console.log (duration)
   
};


function 

function calculateMorgage (principal, interestRate, duration) {
       
};


 function displayOutput (monthlyPayment, interestCharged) {
    const outputMonthlyPayment = document.getElementById ("outputMonthlyPayment")
    const outputInterestPayed = document.getElementById ("outputTotalAmount")
 
    
};

 

