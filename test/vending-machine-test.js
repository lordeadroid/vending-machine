const testing = require("../lib/testing-framework.js");
const values = require("../src/vending-machine.js");

const toVend = function () {
  console.log("\nTest cases for vending coins\n");

  testing.assertEquals(values.vend([1], 1), 1, "For amount 1 with denomination of 1 it should return 1 coins");
  testing.assertEquals(values.vend([2], 2), 1, "For amount 2 with denomination of 2 it should return 1 coins");
  testing.assertEquals(values.vend([1, 2], 2), 1, "For amount 2 with denomination of 1 & 2 it should return 1 coins");
  testing.assertEquals(values.vend([1, 2], 5), 3, "For amount 5 with denomination of 1 & 2 it should return 3 coins");
  testing.assertEquals(values.vend([5], 5), 1, "For amount 5 with denomination of 5 it should return 1 coins");
  testing.assertEquals(values.vend([5], 10), 2, "For amount 10 with denomination of 5 it should return 2 coins");
  testing.assertEquals(values.vend([10], 10), 1, "For amount 10 with denomination of 10 it should return 1 coins");
  testing.assertEquals(values.vend([1, 4, 7], 13), 4, "For amount 13 with denomination of 1, 4 & 7 it should return 4 coins");
  testing.assertEquals(values.vend([1, 7, 4], 13), 4, "For amount 13 with denomination of 1, 7 & 4 it should return 4 coins");

  testing.assertEquals(values.minElement([1, 2]), 1, "For [1, 2] is should return 1");
  testing.assertEquals(values.minElement([3, 2]), 2, "For [3, 2] is should return 2");
}

toVend();
