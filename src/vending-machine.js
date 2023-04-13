const numberOfCoins = function (amount, currentCoin) {
  return Math.floor(amount / currentCoin);
}

const newAmount = function (amount, currentCoin) {
  return amount % currentCoin;
}

const maxElement = function (numbers) {
  let max = numbers[0];

  for (let index = 0; index < numbers.length; index++) {
    if (max < numbers[index]) {
      max = numbers[index];
    }
  }

  return max;
}

const maxSort = function (numbers) {
  let sorted = [];
  let unsorted = numbers.slice();

  while (unsorted.length !== 0) {
    let max = maxElement(unsorted);
    sorted.push(max);
    let index = unsorted.indexOf(max);
    unsorted.splice(index, 1);
  }

  return sorted;
} 

const dispenseCoins = function (denominations, amount) {
  let totalCoins = 0;
  let coins = maxSort(denominations);

  for (const currentCoin in coins) {
    totalCoins += Math.floor(amount / currentCoin);
    amount = amount % currentCoin;
  }

  return totalCoins;
}

const coinsWithName = function (denominations, totalAmount) {
  const nameCoins = [];
  const coins = maxSort(denominations);
  let amount = totalAmount;

  for (let coin of coins) {
    nameCoins.push(coin.toString());
    nameCoins.push(numberOfCoins(amount, coin));
    amount = newAmount(amount, coin);
  }

  return nameCoins;
}

exports.notesVend = coinsWithName;
exports.vend = dispenseCoins;
