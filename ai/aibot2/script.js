

function sendData() {
    var inputText = document.getElementById('userInput').value;
    var assistantResponse = document.getElementById('serverResponse').value;
    fetch('https://ai.asafmaoz.com/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userMessage: inputText,
            assistant: assistantResponse })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('serverResponse').value = data.message;
        })
        .catch(error => console.error('Error:', error));
}

// document.getElementById('sendButton').addEventListener('click', function() {
//     const userInput = document.getElementById('userInput').value;
//     const serverResponseArea = document.getElementById('serverResponse');
//
//     // Simulate a server response (replace this with actual server call if needed)
//     const simulatedResponse = `Server: You said "${userInput}"`;
//
//     // Display the response
//     serverResponseArea.value += `You: ${userInput}\n${simulatedResponse}\n\n`;
//
//     // Clear the user input area
//     document.getElementById('userInput').value = '';
// });
