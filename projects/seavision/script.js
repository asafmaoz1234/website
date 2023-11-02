document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const coastalAreaSelector = document.getElementById('coastal-area-selector');
    const resultsTable = document.getElementById('results-table');
    const registrationForm = document.getElementById('registration-form');

    // Object to store cached data for each coastal area
    const cachedData = {};

    // Function to fetch data from the server or use cached data
    function fetchData(coastalArea) {
        if (cachedData[coastalArea]) {
            return Promise.resolve(cachedData[coastalArea]);
        } else {
            // Replace with your server API URL
            return fetch(`https://example.com/api/data?coastalArea=${coastalArea}`)
                .then(response => response.json())
                .then(data => {
                    cachedData[coastalArea] = data; // Cache the data
                    return data;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }

    // Function to populate the results table
    function populateTable(data) {
        resultsTable.innerHTML = ''; // Clear previous data
        // Create table rows with data
        data.forEach(entry => {
            const row = resultsTable.insertRow();
            row.insertCell(0).textContent = entry.date;
            row.insertCell(1).textContent = `Wave Height: ${entry.waveHeight} meters`;
            row.insertCell(2).textContent = `Weather: ${entry.weather}`;
        });
    }

    // Event listener for coastal area selection
    coastalAreaSelector.addEventListener('change', function () {
        const selectedArea = coastalAreaSelector.value;
        fetchData(selectedArea)
            .then(data => {
                populateTable(data);
            });
    });

    // Event listener for form submission
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Collect form data
        const selectedService = document.getElementById('coastal-service').value;
        const userEmail = document.getElementById('email').value;

        // Send data to the server (replace with your server logic)
        const formData = {
            service: selectedService,
            email: userEmail,
            // Add other form data fields as needed
        };

        // Replace with your server API URL for registration
        fetch('https://example.com/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (response.ok) {
                    // Registration successful, handle success scenario
                    alert('Registration successful!');
                    // Clear the form fields if needed
                    registrationForm.reset();
                } else {
                    // Registration failed, handle error scenario
                    alert('Registration failed. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error registering user:', error);
                alert('An error occurred. Please try again later.');
            });
    });
});
