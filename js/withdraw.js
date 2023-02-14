document.getElementById('widBtnHandler').addEventListener('click', function () {
    const withdrawElement = document.getElementById('withdraw-field');
    const previousWithdrawValue = parseFloat(withdrawElement.value);
    
    withdrawElement.value = '';
    
    if(isNaN(withdrawElement)){
        alert("Input Should be a number");
        return;
    }

    const withdrawAmount = document.getElementById('withdraw-amount');
    const newWithdrawValue = parseFloat(withdrawAmount.innerText);

    const currentWithdrawValue = previousWithdrawValue + newWithdrawValue;
    
    
    const balanceElement = document.getElementById('balance-amount');
    const newBalanceValue = parseFloat(balanceElement.innerText);

    if (newBalanceValue < previousWithdrawValue){
        alert('Bap er bank a eto taka nai');
        return;
    } 
    withdrawAmount.innerText = currentWithdrawValue;
    currentBalance = newBalanceValue - previousWithdrawValue;
    balanceElement.innerText = currentBalance;
    
})
