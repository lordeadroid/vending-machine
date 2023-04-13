let totalAssertions = 0;
let passedAssertions = 0;

const updateAssertionsCount = function (result) {
  if (result) {
    passedAssertions++;
  }

  totalAssertions++;
}

const formatExpectationMismatch = function (actual, expected) {
  let message = "";

  message += "\t  Actual : " + actual;
  message += "\n";
  message += "\tExpected : " + expected;

  return message;
}

const formatTestResult = function (result, actual, expected, message) {
  const icon = result ? "✅" : "❌";

  const firstLine = icon + " " + message;
  const secondLine = result ? "" : "\n" + formatExpectationMismatch(actual, expected);

  return firstLine + secondLine;
}

const assertEquals = function (actual, expected, message) {
  const result = expected === actual;

  updateAssertionsCount(result);
  console.log(formatTestResult(result, actual, expected, message));
}

const displayHeading = function (string) {
  console.log(string);
  console.log("-x-".repeat(string.length / 3));
  console.log();
}

const onePlus = function (number) {
  return number + 1;
}

const displaySummary = function () {
  let message = "";

  message += "\nSummary: ";
  message += passedAssertions + " / " + totalAssertions;
  message += " test passed";

  console.log(message);
}

const compareArrays = function (firstArray, secondArray) {
  if (firstArray === secondArray) {
    return true;
  }

  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let index = 0; index < firstArray.length; index++) {
    if (firstArray[index] !== secondArray[index]) {
      return false;
    }
  }

  return true;
}

const assertArrays = function (actual, expected, message) {
  const result = compareArrays(expected, actual);

  updateAssertionsCount(result);
  console.log(formatTestResult(result, actual, expected, message));
}

exports.assertArrays = assertArrays;
