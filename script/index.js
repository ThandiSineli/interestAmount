document.getElementById('calculateBtn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);

    if (!isNaN(amount) && !isNaN(interestRate)) {
        const interestAmount = (amount * interestRate) / 100;
        document.getElementById('output').textContent = `Interest Amount: ${interestAmount}`;
    } else {
        document.getElementById('output').textContent = ' Enter valid numbers.';
    }
});
