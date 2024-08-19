function performOperation() {
  // Get user input from input fields
  let num1 = parseInt(document.getElementById("input1").value);
  let num2 = parseInt(document.getElementById("input2").value);
  // Check if inputs are valid
  if (!isNaN(num1) && !isNaN(num2)) {
    // Perform operation
    let result = multiply(num1, num2);

    // Add new operations here
    let addResult = add(num1, num2);
    let divideResult = divide(num1, num2);

    // Display the result
    displayResult(result, addResult, divideResult);
  } else {
    displayResult("Please enter valid numbers");
  }

  function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
  }

  function add(a, b) {
    debugger;
    // Add the numbers
    return a + b;
  }

  function divide(a, b) {
    debugger;

    return a / b;
  }

  function displayResult(result, addResult, divideResult) {
    // Display the result in a paragraph element
    const resultElement = document.getElementById("result");
    resultElement.textContent =
      `The multiplication result is: ${result}` +
      " " +
      `The addition result is: ${addResult}` +
      " " +
      `The division result is: ${divideResult}`;
  }
}
