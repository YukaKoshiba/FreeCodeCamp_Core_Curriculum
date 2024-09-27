// Get Element
const inputElement = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const output = document.getElementById('results-div');

// regular expressions
const symbolRegex = /-|\(|\)|\s/g;
const notSymbolRegex = /[^-\(\)\s\d]/g;

const telRegex = /(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}/;
const telAreaCodeRegex = /1\s*(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}/;
const notTelRegex = /[^1]\s*(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}/;

// Output
function validIutput (inputTel) {
  output.innerHTML = `<p>Valid US number: ${inputTel}</p>`; 
}
function invalidIutput (inputTel) {
  output.innerHTML = `<p>Invalid US number: ${inputTel}</p>`;
}

// TelNumSheck
function telNumChek (inputTel) {

  const trimNum = inputTel.replace(symbolRegex, "");
  // hyphen count
  const hyphen = inputTel.match(/-/g);
  const hyphenCount = hyphen ? hyphen.length : 0 ;

  // () count
  const parenthese = inputTel.match(/\(|\)/g);
  const parentheseCount = parenthese ? parenthese.length : 0 ;

// Number syntax check
  if (!(trimNum.length === 11 || trimNum.length === 10)) {
    invalidIutput(inputTel);
  // Remove incorrect number length
  } else if ((trimNum.length === 11) && (trimNum.slice(0,1) !== "1")) {
    invalidIutput(inputTel);
  // Remove telAreaCode "-1"
  } else if (inputTel.slice(0,1) == "-") {
    invalidIutput(inputTel);
  // Remove rogue -
  } else if (hyphenCount >= 3) {
     invalidIutput(inputTel);
  // Remove rogue ()
  } else if (parentheseCount % 2 === 1) {
     invalidIutput(inputTel);
  // Remove char
  } else if (inputTel.match(notSymbolRegex)) {
     invalidIutput(inputTel);
// Check telAreaCode "1"
  } else if (inputTel.match(telAreaCodeRegex)) {
    validIutput(inputTel);

  } else if(inputTel.match(notTelRegex)) {
    invalidIutput(inputTel);

  } else if (inputTel.match(telRegex)) {
    validIutput(inputTel);
  }
}

// Check input
checkButton.addEventListener('click', () => {
  // Get Element's data
  const inputValue = inputElement.value;

  if (inputValue === '') {
    alert('Please provide a phone number');
  } else {
    telNumChek (inputValue);
  }
});

// Clear input
clearButton.addEventListener('click', () => {
  output.innerHTML = `<p></p>`;
});
