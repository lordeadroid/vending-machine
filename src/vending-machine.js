const coinOf10 = function (amount) {
  return Math.floor(amount / 10);
}

const coinOf5 = function (amount) {
  return Math.floor(amount / 5);
}

const coinOf2 = function (amount) {
  return Math.floor(amount / 2);
}

const coinOf1 = function (amount) {
  return amount;
}

const dispenseCoins = function (amount) {
  let totalCoins = 0;

  totalCoins += coinOf10(amount);
  amount = amount % 10;

  totalCoins += coinOf5(amount);
  amount = amount % 5;

  totalCoins += coinOf2(amount);
  amount = amount % 2;

  totalCoins += coinOf1(amount);

  return totalCoins;
}

exports.vend = dispenseCoins;
