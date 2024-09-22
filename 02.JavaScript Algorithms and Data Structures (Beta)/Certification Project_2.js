// Get Element in HTML
const convertButton = document.getElementById('convert-btn');
const inputNumber = document.getElementById('number');
const output = document.getElementById('output');

// Input error
function inputError(message) {
  output.innerHTML = `<p>${message}.</p>`;

  // Change output's CSS
  output.style.color = getComputedStyle(document.documentElement).getPropertyValue('--alartcolor');
  output.style.background = getComputedStyle(document.documentElement).getPropertyValue('--alartbackground');
  output.style.border = getComputedStyle(document.documentElement).getPropertyValue('--alartcolor');
  return output.innerHTML, output.style.color, output.style.background, output.style.border
};

// Convert Arabic to Roman
function convertNum (inputValue) {
  let quotient = 0;
  let romanNum = "";

  if (Math.floor(inputValue/1000) > 0) {
    quotient = Math.floor(inputValue/1000);
    for (let i=0; i<quotient; i++) {
      romanNum = romanNum + "M";
    };
    inputValue = inputValue - 1000*quotient;

  };

  if (Math.floor(inputValue/900) > 0) {
    romanNum = romanNum + "CM";
    inputValue = inputValue - 900;
  };

  if (Math.floor(inputValue/500) > 0) {
    romanNum = romanNum + "D";
    inputValue = inputValue - 500;
  };

  if (Math.floor(inputValue/400) > 0) {
    romanNum = romanNum + "CD";
    inputValue = inputValue - 400;
  };

  if (Math.floor(inputValue/100) > 0) {
    quotient = Math.floor(inputValue/100);
    for (let i=0; i<quotient; i++) {
      romanNum = romanNum + "C";
    };
    inputValue = inputValue - 100*quotient;
  };

    if (Math.floor(inputValue/90) > 0) {
    romanNum = romanNum + "XC";
    inputValue = inputValue - 90;
  };

  if (Math.floor(inputValue/50) > 0) {
    romanNum = romanNum + "L";
    inputValue = inputValue - 50;
  };

  if (Math.floor(inputValue/40) > 0) {
    romanNum = romanNum + "XL";
    inputValue = inputValue - 40;
  };

  if (Math.floor(inputValue/10) > 0) {
    quotient = Math.floor(inputValue/10);
    for (let i=0; i<quotient; i++) {
      romanNum = romanNum + "X";
    };
    inputValue = inputValue - 10*quotient;
  };

  if (Math.floor(inputValue/9) > 0) {
    romanNum = romanNum + "IX";
    inputValue = inputValue - 9;
  };

  if (Math.floor(inputValue/5) > 0) {
    romanNum = romanNum + "V";
    inputValue = inputValue - 5;
  };

  if (Math.floor(inputValue/4) > 0) {
    romanNum = romanNum + "IV";
    inputValue = inputValue - 4;
  };

  if (inputValue < 4) {
    while (inputValue != 0) {
      romanNum = romanNum + "I";
      inputValue = inputValue-1;
    };
  };
  return output.innerHTML = `<p>${romanNum}</p>`;
};

// Check input
convertButton.addEventListener('click', () => {
  // Get Element's value
  const inputValue = inputNumber.value;

  if (inputValue === '') {
    inputError("Please enter a valid number");
  } else if (inputValue < 0) {
    inputError("Please enter a number greater than or equal to 1");
  } else if (inputValue >= 4000) {
    inputError("Please enter a number less than or equal to 3999");
  } else {
    // Convert
    convertNum(inputValue);
  };
});

// other convert way
/*
const convertToRoman = num => {
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const result = [];

  ref.forEach(function (arr) {
    while (num >= arr[1]) {
      result.push(arr[0]);
      num -= arr[1];
    }
  });

  return result.join('');
};
*/
