const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const chatbot = require('./chatbot');

// Initialize an Express app
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve the HTML file for the chat interface
app.use(express.static(path.join(__dirname, 'public')));

// WebSocket connection setup
wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const question = message.toString();
    const response = chatbot.askQuestion(question);
    
    // Send the response back to the client
    ws.send(`Bot: ${response}`);
  });
});

// Start the server
const PORT = process.env.PORT || 2000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
