

function doConvert(principal, interestRate, loanLength) {
    let monthlyRate = interestRate / 100 / 12;
    let months = loanLength * 12;

    let monthlyPayment = principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));
    let totalInterest = (monthlyPayment * months) - principal;

    return [monthlyPayment, totalInterest];
}

function init() {
    const calculateBtn = document.getElementById("convertBtn");
    calculateBtn.onclick = click;
}

function click() {
    const principal = parseFloat(document.getElementById("inputPrincipal").value);
    const interestRate = parseFloat(document.getElementById("inputInterest").value);
    const loanLength = parseInt(document.getElementById("inputLoanLength").value);

    let results = doCalcs(principal, interestRate, loanLength);

    const outputMonthlyPayment = document.getElementById("outputMonthlyPayment");
    const outputTotalAmount = document.getElementById("outputTotalAmount");

    outputMonthlyPayment.value = results[0].toFixed(2);
    outputTotalAmount.value = results[1].toFixed(2);
}

init();