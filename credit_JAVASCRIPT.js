function ClearAll() {
    document.getElementById('Textbox1').value = '';
    document.getElementById('Textbox2').value = '';
    document.getElementById('Textbox3').value = '';
    document.getElementById('Textbox4').value = '';
    document.getElementById('Textbox5').value = '';
    document.getElementById('Textbox6').value = '';
}
function Calculate() {
    var creditAmount = parseFloat(document.getElementById('Textbox1').value);
    var creditAmountReplacement = creditAmount;
    var creditRate = parseFloat(document.getElementById('Textbox2').value);
    var years = parseInt(document.getElementById('Textbox3').value);
    var sumOfInterest = 0;
    var sumOfInterestReplacement;
    for (var i = 1; i <= years; i++) {
        sumOfInterestReplacement = 0;
        sumOfInterestReplacement += creditAmountReplacement / 100 * creditRate;
        creditAmountReplacement -= sumOfInterestReplacement;
        sumOfInterest += sumOfInterestReplacement;
    }
    document.getElementById('Textbox4').value = sumOfInterest.toFixed(2);
    document.getElementById('Textbox5').value = (sumOfInterest + creditAmount).toFixed(2);
    document.getElementById('Textbox6').value = ((sumOfInterest + creditAmount) / (years * 12)).toFixed(2);
}
