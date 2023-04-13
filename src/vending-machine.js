const minElement = function (numbers) {
  let min = numbers[0];

  for (let index = 0; index < numbers.length; index++) {
    if (min > numbers[index]) {
      min = numbers[index];
    }
  }

  return min;
}

const minSort = function (numbers) {
  let sorted = [];
  let unsorted = numbers.slice();

  while (unsorted.length !== 0) {
    let min = minElement(unsorted);
    sorted.push(min);
    let index = unsorted.indexOf(min);
    unsorted.splice(index, 1);
  }

  return sorted;
} 

const dispenseCoins = function (denominations, amount) {
  let totalCoins = 0;

  for (let index = 0, coins = minSort(denominations); index < denominations.length; index++) {
    const currentCoin = coins.pop();
    totalCoins += Math.floor(amount / currentCoin);
    amount = amount % currentCoin;
  }

  return totalCoins;
}

exports.vend = dispenseCoins;
exports.minSort = minSort;
exports.minElement = minElement;
