const dispenseCoins = function (denominations, amount) {
  let totalCoins = 0;

  for (let index = denominations.length - 1, coins = denominations.slice(); index >= 0; index--) {
    const currentCoin = coins.pop();

    totalCoins += Math.floor(amount / currentCoin);
    amount = amount % currentCoin;
  }

  return totalCoins;
}

exports.vend = dispenseCoins;
