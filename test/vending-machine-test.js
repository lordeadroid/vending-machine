const testing = require("../lib/testing-framework.js");
const values = require("../src/vending-machine.js");

const multipleDenominations = function () {
  testing.assertArrays(values.vend([1, 2], 2), 1, "For amount 2 with denomination of 1 & 2 it should return 1 coins");
  testing.assertArrays(values.vend([1, 2], 5), 3, "For amount 5 with denomination of 1 & 2 it should return 3 coins");
  testing.assertArrays(values.vend([5], 5), 1, "For amount 5 with denomination of 5 it should return 1 coins");
  testing.assertArrays(values.vend([5], 10), 2, "For amount 10 with denomination of 5 it should return 2 coins");
  testing.assertArrays(values.vend([10], 10), 1, "For amount 10 with denomination of 10 it should return 1 coins");
  testing.assertArrays(values.vend([1, 4, 7], 13), 4, "For amount 13 with denomination of 1, 4 & 7 it should return 4 coins");
}

const randomDenominations = function () {
  testing.assertArrays(values.vend([1, 7, 4], 13), 4, "For amount 13 with denomination of 1, 7 & 4 it should return 4 coins");
  testing.assertArrays(values.vend([10, 5, 1, 3], 19), 4, "For amount 19 with denomination of 10, 5, 1 & 3 it should return 4 coins");
  testing.assertArrays(values.vend([10, 5, 1, 3], 21), 3, "For amount 21 with denomination of 10, 5, 1 & 3 it should return 3 coins");
}

const denominationWithName = function () {
  console.log("Test case for random denominations that return coins with value\n");

  testing.assertArrays(values.notesVend([1, 2, 5, 10], 18), ['10', 1, '5', 1, '2', 1, '1', 1], "For amount of 18 and denominations of 10, 5, 2 & 1");
  testing.assertArrays(values.notesVend([1, 2, 4], 11), ['4', 2, '2', 1, '1', 1], "For amount of 11 and denominations of 4, 2 & 1");
}

const vendCoinsTest = function () {
  console.log("\nTest cases for vending coins:\n");

  denominationWithName();
}

const testMaxElement = function () {
  console.log("\nTest cases for maximum element:\n");

  testing.assertEquals(values.maxElement([1, 2]), 1, "For [1, 2] is should return 1");
  testing.assertEquals(values.maxElement([3, 2]), 2, "For [3, 2] is should return 2");
}

const testMaxSort = function () {
  console.log("\nTest cases for maxSort:\n");

  testing.assertArrays(values.maxSort([1]), [1], "Array of one element should return the same element");
  testing.assertArrays(values.maxSort([1, 2]), [1, 2], "An sorted array should return the same array");
}

const runTest = function () {
  vendCoinsTest();
}

runTest();
