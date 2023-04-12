const dispenseCoins = function (denominations, amount) {
  let totalCoins = 0;

  for (let index = 0, coins = denominations.slice(); index < denominations.length; index++) {
    const currentCoin = coins.pop();

    totalCoins += Math.floor(amount / currentCoin);
    amount = amount % currentCoin;
  }

  return totalCoins;
}

exports.vend = dispenseCoins;
