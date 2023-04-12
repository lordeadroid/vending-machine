const testing = require("../lib/testing-framework.js");
const values = require("../src/vending-machine.js");

const toVend = function () {
  console.log("\nDummy Test for checking the links\n");

  testing.assertEquals(values.zero, 0, "Equal");
  testing.assertEquals(values.one, 0 , "Not equal");
}

toVend();
