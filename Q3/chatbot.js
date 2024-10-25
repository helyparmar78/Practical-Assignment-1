// chatbot.js

// A simple object containing domain-specific responses
const responses = {
    "Explain callback in Node.js?": "A callback function is called after a given task. It allows other code to be run in the meantime and prevents any blocking.  Being an asynchronous platform, Node.js heavily relies on callback. All APIs of Node are written to support callbacks..",
    "What Is Express JS?": "Express is a node js web application framework that provides broad features for building web and mobile applications..",
    "what is a mern?": "MERN is a JavaScript framework that allows developers to build web applications using a combination of technologiesA chatbot is an artificial intelligence (AI) program that simulates interactive human conversation.",
    "how does async work in javascript?": "Asynchronous programming in JavaScript is achieved using callbacks, promises, and async/await.",
  };
  
  // The chatbot function
  function askQuestion(question) {
    const normalizedQuestion = question.toLowerCase().trim();
  
    if (responses[normalizedQuestion]) {
      return responses[normalizedQuestion];
    } else {
      return "Sorry, I don't have an answer to that. Try asking something else about technology.";
    }
  }
  
  // Export the module so it can be used in other files
  module.exports = {
    askQuestion,
  };
  