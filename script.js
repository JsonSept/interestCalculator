function convertMinutesToSeconds() {
    // Get the input value
    let price = parseFloat(document.getElementById('minutesInput').value);

    // Check if the input is a valid number
    if (isNaN(price)) {
        alert("Please enter a valid number for minutes.");
        return;
    }

    // Convert minutes to seconds
    let seconds = 0.15 * price + price;

    // Display the result in the output field
    document.getElementById('secondsOutput').value = seconds.toFixed(2);
}
