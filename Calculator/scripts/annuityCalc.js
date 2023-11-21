"use strict";

window.onload = init;

function init(){
    const buttonCalculate = document.getElementById("buttonCalculate");
    buttonCalculate.onclick = buttonCalculateClick;
}

function buttonCalculateClick(){
        
    const inputPayment = parseFloat(document.getElementById("inputPayment").value); // PMT
    const inputInterest = parseFloat(document.getElementById("inputInterest").value);
    const inputYears = parseFloat(document.getElementById("inputYears").value);

       
    let annualInterestRateInDecimal = (inputInterest / 100);
    let monthlyInterestRate = (annualInterestRateInDecimal / 12);

    let numberOfMonth = inputYears * 12; 

    let presentValue = inputPayment * 
        (
            (1-(1 + monthlyInterestRate)** (- numberOfMonth)) / monthlyInterestRate

        );

    let outputPresentValue = document.getElementById("outputPresentValue");

    outputPresentValue.value = presentValue.toFixed(2);
}