"use strict"

window.onload = init;

function init () {

const calculateBtn =  document.getElementById("calculateBtn")
calculateBtn.onclick = calculateBtnClick;
}

// input

function calculateBtnClick (){

    const inputPayment = parseFloat(document.getElementById("inputPayment").value); //PMT
    const inputInterest = parseFloat(document.getElementById("inputInterest").value);
    const inputYears = parseFloat( document.getElementById("inputYears").value); //r


    // calculation 

   //convert to intrest rate from % to decimal 

   let annualInterestRateinDecimal = (inputInterest / 100);
   let monthlyIntrestRate = (annualInterestRateinDecimal / 12 ); // r

   let numberOfMonths= (inputYears* 12) // n

   let presentValue = inputPayment *  
   (
   
   (1-(1 + monthlyIntrestRate)**(numberOfMonths)) / monthlyIntrestRate 

   );
   
   


// Output 

let outputPresentValue = document.getElementById ("outputPresentValue");
outputPresentValue.value = presentValue;

   }