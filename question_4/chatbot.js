const responses = {
    "explain callback in node.js?": "A callback function is called after a given task. It allows other code to be run in the meantime and prevents any blocking. Being an asynchronous platform, Node.js heavily relies on callbacks.",
    "what is express js?": "Express is a Node.js web application framework that provides broad features for building web and mobile applications.",
    "what is a mern?": "MERN is a JavaScript framework that allows developers to build web applications using a combination of MongoDB, Express, React, and Node.js.",
    "how does async work in javascript?": "Asynchronous programming in JavaScript is achieved using callbacks, promises, and async/await.",
  };
  
  function askQuestion(question) {
    const normalizedQuestion = question.toLowerCase().trim();
    return responses[normalizedQuestion] || "Sorry, I don't have an answer to that. Try asking something else about technology.";
  }
  
  module.exports = { askQuestion };
  