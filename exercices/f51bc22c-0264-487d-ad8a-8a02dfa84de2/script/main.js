
import {
  convertToInteger,
  convertToIntegerWithBase,
  handleInvalidConversion,
} from "./parseIntExercises.js";

const numberString1 = "42";
const numberString2 = "1010";
const base = 2;
const invalidNumberString = "abc123";

const mainElement = document.querySelector("main");

function displayResult(element, result) {
  const resultElement = document.createElement("div");
  resultElement.classList.add("result");
  resultElement.textContent = result;
  element.appendChild(resultElement);
}

function displayError(element, error) {
  const errorElement = document.createElement("div");
  errorElement.classList.add("error");
  errorElement.textContent = error;
  element.appendChild(errorElement);
}

// Conversion using parseInt without base
const convertedNumber1 = convertToInteger(numberString1);
displayResult(
  mainElement,
  `Conversion of "${numberString1}" to integer: ${convertedNumber1}`
);

// Conversion using parseInt with base
const convertedNumber2 = convertToIntegerWithBase(numberString2, base);
displayResult(
  mainElement,
  `Conversion of "${numberString2}" to integer with base ${base}: ${convertedNumber2}`
);

// Handling invalid conversion
const invalidConversionResult = handleInvalidConversion(invalidNumberString);
if (typeof invalidConversionResult === "number") {
  displayResult(mainElement, `Valid conversion: ${invalidConversionResult}`);
} else {
  displayError(mainElement, `Error: ${invalidConversionResult}`);
}
