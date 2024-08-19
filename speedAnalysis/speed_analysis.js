let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
  // Set the test text
  document.getElementById("inputText").value = testText;

  // Clear the userInput field (Not in module but added for ease of starting the application)
  document.getElementById("userInput").value = "";

  // Reset the results and timer
  document.getElementById("output").innerHTML = "";
  startTime = new Date().getTime();

  //Change button text and functionality
  var button = document.getElementById("btn");
  button.innerHTML = "End Test";
  button.onclick = endTest;
}

function endTest() {
  endTime = new Date().getTime();

  //Disable user input
  document.getElementById("inputText").readOnly = true;

  // Calculate time elapsed and words per minute (WPM)
  var timeElapsed = (endTime - startTime) / 1000;
  var userTypedText = document.getElementById("userInput").value;

  // Split the words using regex to count the words correctly
  var typedWords = userTypedText.split(/\s+/).filter(function (word) {
    return word != "";
  }).length;

  var wpm = 0; // Default value

  if (timeElapsed !== 0 && !isNaN(typedWords)) {
    wpm = Math.floor((typedWords / timeElapsed) * 60);
  }

  // Display the results
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML =
    "<h2>Typing Test Results:</h2>" +
    "<p>Total Length: " +
    userTypedText.length +
    "</p>" +
    "<p>Words Typed: " +
    typedWords +
    "</p>" +
    "<p>Time Elapsed: " +
    timeElapsed.toFixed(2) +
    "seconds</p>" +
    "<p>Words Per Minute (WPM): " +
    wpm +
    "</p>";

  // This function is wrong. If you want to apply this, you need to remove the start button then modify the End button as start button change the button to End when starting a new session and use this after clicking the end button
  // Reset the button
  //   var button = document.getElementById("btn");
  //   button.innerHTML = "Start Test";
  //   button.onclick = startTest;
}
