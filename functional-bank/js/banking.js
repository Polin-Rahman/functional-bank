function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input filed
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const peviousTotal = parseFloat(totalText);

    totalElement.innerText = peviousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('blance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('blance-total');
    /*
   const balanceTotalText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }

}

document.getElementById('deposit-button').addEventListener('click', function () {

    const depositeAmount = getInputValue('deposit-input');
    if (depositeAmount > 0) {
        // get and update deposite total
        updateTotalField('deposite-total', depositeAmount);
        //update balance after deposite
        updateBalance(depositeAmount, true);
    }

});

// handel withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        // get and update withdraw total
        updateTotalField('withdraw-total', withdrawAmount);
        // update balance after withdraw
        updateBalance(withdrawAmount, false);
    }
});