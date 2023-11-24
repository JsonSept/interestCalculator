function calculateInterest() {
    // Get the input amount input
    let currentAmount = parseFloat(document.getElementById('amountInput').value);

    // Check if the input is a valid number
    if (isNaN(currentAmount)) {
        alert("Please enter a valid number for the amount.");
        return;
    }

    // calculates the vat amount and adds to the current amount
    let vatAmount = 0.15 * currentAmount + currentAmount;

    // Display the result in the output field
    document.getElementById('vatOutput').value = vatAmount.toFixed(2);
}
