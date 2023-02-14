//Deposit
document.getElementById('depBtnHandler').addEventListener('click',function(){
    const depositElement = document.getElementById('deposit-field');
    const depositValue = depositElement.value;

    if(isNaN(depositValue)){
        alert("Input Should be a number");
        return;
    }

    const previousDepositValue = parseFloat(depositValue);
    const depositAmount = document.getElementById('deposit-amount');
    const newDepositValue = parseFloat(depositAmount.innerText);  
    const currentDepositValue = newDepositValue + previousDepositValue;
    depositAmount.innerText = currentDepositValue;

    //Balance deposit

    const balanceAmount = document.getElementById('balance-amount');
    const balanceValue = parseFloat(balanceAmount.innerText);

    balanceAmount.innerText = previousDepositValue + balanceValue;


    depositElement.value = '';
})
