"use strict"

window.onload = init;

function init (){
    let estnBtn = document.getElementById ("calculateBtn")
    estnBtn.onclick = estnBtnClicked


}

function estnBtnClicked (){
    const deposit = Number(document.getElementById("inputDeposit").value);
    const years = Number (document.getElementById ("inputYears").value);
    const interestRate = Number(document.getElementById ("inputInterest").value);
    const selctor = document.getElementById ("compundSelect").value
    calculateFutureValue (deposit, years, interestRate,selctor);

}

    


function calculateFutureValue (deposit, years, interestRate ){
          


}



function outputFutureValue (){


}