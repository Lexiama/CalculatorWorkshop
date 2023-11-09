"use strict"

window.onload = init;

 function init () { 
    let convertBtn = document.getElementById ("convertBtn")
     convertBtn.onclick = convertedTemperature
}

// input what do we want it to do?

function TemperatureConverting (Temperature, FToC) {

    if (FToC) {
        //given Fahrenheit, return Celcius
        return (Temperature - 32) * 5 / 9;
    } else {
        //given Celcius, return Fahrenheit
        return (Temperature * 9 / 5) + 32;
    }

}


 // How can it do it and what do we need?

 
function convertedTemperature () {
    let TemperatureValue = document.getElementById ("inputTemperature").value;
    let  FToC = document.getElementById("FtoCRadio").Checked;

    // output what will come out from this ?

    let convertedTemp = TemperatureConverting (TemperatureValue, FToC )
        document.getElementById("outputTemperature").value = convertedTemp
 }



 


 