

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
            document.getElementById('serverResponse').value = JSON.stringify(data.message, null, 2); // Display raw response in textarea
            parseResponse(data.message);
        })
        .catch(error => console.error('Error:', error));
}

function parseResponse(workoutPlanText) {
    // const workoutPlan = JSON.parse(workoutPlanText);
    // const container = document.getElementById('serverResponse');
    // container.value = ''; // Clear previous content
    //
    // // Create the formatted response string
    // let formattedResponse = `Title: ${workoutPlan.title}\n\n`;
    // formattedResponse += `Description: ${workoutPlan.description}\n\n`;
    // formattedResponse += `Focus: ${workoutPlan.focus}\n\n`;
    // formattedResponse += `Workout Schedule:\n`;
    // for (const [day, activity] of Object.entries(workoutPlan.workout_schedule)) {
    //     formattedResponse += `  ${day.replace('_', ' ')}: ${activity}\n`;
    // }
    //
    // // Set the formatted response to the textarea
    // container.value = formattedResponse;

    const workoutPlan = JSON.parse(workoutPlanText);
    const container = document.getElementById('responseDiv');
    container.innerHTML = '';

    // Create and append the title
    const title = document.createElement('h1');
    title.textContent = workoutPlan.title;
    container.appendChild(title);

    // Create and append the description
    const description = document.createElement('p');
    description.textContent = workoutPlan.description;
    container.appendChild(description);

    // Create and append the focus
    const focus = document.createElement('p');
    focus.textContent = `Focus: ${workoutPlan.focus}`;
    container.appendChild(focus);

    // Create and append the workout schedule
    const scheduleTitle = document.createElement('h2');
    scheduleTitle.textContent = 'Workout Schedule';
    container.appendChild(scheduleTitle);

    const scheduleList = document.createElement('ul');
    for (const [day, activity] of Object.entries(workoutPlan.workout_schedule)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${day.replace('_', ' ')}: ${activity}`;
        scheduleList.appendChild(listItem);
    }
    container.appendChild(scheduleList);

}