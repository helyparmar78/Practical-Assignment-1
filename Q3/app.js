// app.js
const readline = require('readline');
const chatbot = require('./chatbot');

// Create an interface for reading input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`welcome to Chatbot! ask me about:1 Explain callback in Node.js? \n 2.What Is Express JS? \n 3.what is a mern? \n 4.how does async work in javascript?\n(type 'exit' to quit):`);

// Function to ask questions
function ask() {
  rl.question('You: ', (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log("Goodbye!");
      rl.close();
      return;
    }

    // Get the response from the chatbot module
    const response = chatbot.askQuestion(input);
    console.log(`Bot: ${response}`);

    // Continue asking questions
    ask();
  });
}

// Start asking questions
ask();
