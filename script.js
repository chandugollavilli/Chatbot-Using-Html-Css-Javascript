document.addEventListener("DOMContentLoaded", function() {
    var chatLog = document.getElementById("chat-log");
    var userInput = document.getElementById("user-message");
    var sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function() {
        var userMessage = userInput.value;
        displayMessage(userMessage, "user");
        generateBotResponse(userMessage);
        userInput.value = "";
    });

    function displayMessage(message, sender) {
        var messageClass = sender + "-message";
        var messageElement = document.createElement("div");
        messageElement.classList.add(messageClass);
        messageElement.innerText = message;
        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function generateBotResponse(userMessage) {
        var botResponse;
        
        if (userMessage.toLowerCase().includes("hi") || userMessage.toLowerCase().includes("hello")) {
            botResponse = "Hello! How can I assist you today?";
        } else if (userMessage.toLowerCase().includes("how are you")) {
            botResponse = "I'm an AI, so I don't have feelings, but thanks for asking! How can I help?";
        } else if (userMessage.toLowerCase().includes("thank you") || userMessage.toLowerCase().includes("thanks")) {
            botResponse = "You're welcome! If you have any more questions, feel free to ask.";
        } else {
            botResponse = "I'm sorry, I didn't understand that. Can you please rephrase or ask something else?";
        }
        
        displayMessage(botResponse, "bot");
    }
});
