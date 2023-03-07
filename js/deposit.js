// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmountString = document.getElementById("deposit-field").value;
  const newDepositAmount = parseInt(newDepositAmountString);
  /* 
    1. get previous deposit total by id

    */
  const previousDepositTotalString = document.getElementById("deposit-total").innerText;
  const previousDepositTotal = parseInt(previousDepositTotalString);

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  // set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);

  // get previous balance by using the function
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);

  // empty the input field
  document.getElementById("deposit-field").value = "";
});
