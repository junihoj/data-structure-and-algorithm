// Import the readline module to read input from the console
const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for a number
rl.question('Enter a number: ', (input) => {
  // Convert the input string to a number
  const number = parseInt(input, 10);

  // Check if the input is valid
  if (isNaN(number)) {
    console.log('Please enter a valid number.');
  } else {
    // Convert the number to binary and output it
    console.log(`The binary form of ${number} is: ${number.toString(2)}`);
  }

  // Close the readline interface
  rl.close();
});
