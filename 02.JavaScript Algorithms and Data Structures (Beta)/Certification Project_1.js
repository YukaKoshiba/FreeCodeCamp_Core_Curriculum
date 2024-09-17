// Get Element
const checkButton = document.getElementById('check-btn');
const inputElement = document.getElementById('text-input');

// Check input
checkButton.addEventListener('click', () => {
  // Get Element's data
  const inputValue = inputElement.value;

  if (inputValue === '') {
    alert('Please input a value.');
  };

  // Result output
  const cleanedStr = inputValue.toLowerCase().replace(/[^a-z0-9]/g, '');
const reversedStr = cleanedStr.split('').reverse().join('');

  if (cleanedStr === reversedStr) {
    result.innerHTML = `<p>${inputValue} is a palindrome</p>`;
  } else {
    result.innerHTML = `<p>${inputValue} is not a palindrome</p>`;
  }
});
