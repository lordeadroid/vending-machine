const testing = require("../lib/testing-framework.js");
const values = require("../src/vending-machine.js");

const toVend = function () {
  console.log("\nTest cases for vending whole number coins\n");

  testing.assertEquals(values.vend(0), 0, "For amount 0 it should return 0 coins");
  testing.assertEquals(values.vend(1), 1, "For amount 1 it should return 1 coins");
  testing.assertEquals(values.vend(2), 1, "For amount 2 it should return 1 coins");
  testing.assertEquals(values.vend(5), 1, "For amount 5 it should return 1 coins");
  testing.assertEquals(values.vend(10), 1, "For amount 10 it should return 1 coins");
  testing.assertEquals(values.vend(18), 4, "For amount 18 it should return 4 coins");
  testing.assertEquals(values.vend(21), 3, "For amount 21 it should return 3 coins");
}

toVend();
