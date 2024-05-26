

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
            parseResponse(data.message);
        })
        .catch(error => console.error('Error:', error));
}

function parseResponse(workoutPlanText) {

    const workoutPlan = JSON.parse(workoutPlanText);
    const container = document.getElementById('serverResponse');
    container.classList.add('not-empty');
    container.textContent = ''; // Clear previous content
    const disclaimer = document.getElementById('disclaimerDiv');
    disclaimer.style.display = "none";

    // Create and append the title
    const title = document.createElement('h1');
    if (workoutPlan.title === undefined || workoutPlan.title === '') {
        title.textContent = 'Your Custom Workout Plan';
    }
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
    disclaimer.style.display = "block";

}