document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const coastalAreaSelector = document.getElementById('coastal-area-selector');
    const resultsTable = document.getElementById('results-table');
    const registrationForm = document.getElementById('registration-form');
    const resultsPlaceholder = document.getElementById('results-placeholder');


    // Object to store cached data for each coastal area
    const cachedData = {};

    // Function to fetch data from the server or use cached data
    function fetchData(coastalArea) {
        if (cachedData[coastalArea]) {
            return Promise.resolve(cachedData[coastalArea]);
        } else {
            // Replace with your server API URL
            return fetch(`https://jsonplaceholder.typicode.com/posts?coastalArea=${coastalArea}`)
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
        // Create table rows with data, limiting to the first 10 entries
        for (let i = 0; i < Math.min(10, data.length); i++) {
            const entry = data[i];
            const row = resultsTable.insertRow();
            row.insertCell(0).textContent = entry.userId;
            row.insertCell(1).textContent = `Wave Height: ${entry.id} meters`;
            row.insertCell(2).textContent = `Weather: ${entry.title}`;
            if (entry.id < 5) {
                row.classList.add('entry-smaller');
            } else {
                row.classList.add('entry-larger');
            }
        }
    }

    // Event listener for coastal area selection
    coastalAreaSelector.addEventListener('change', function () {
        const selectedArea = coastalAreaSelector.value;
        fetchData(selectedArea)
            .then(data => {
                populateTable(data);
            });
    });

    // Add an event listener to the select element
    coastalAreaSelector.addEventListener('change', function() {
        // Check if "Choose location" is selected
        if (coastalAreaSelector.value === 'default') {
            // If "Choose location" is selected, clear the table and show the placeholder
            resultsTable.style.display = 'none'; // Hide the table
            resultsPlaceholder.style.display = 'block'; // Display the placeholder
            // Clear the table content by removing all rows (except the header row)
            const rows = resultsTable.querySelectorAll('tr:not(:first-child)');
            rows.forEach(row => row.remove());
        } else {
            // If a coastal area is selected, show the results table and hide the placeholder
            resultsTable.style.display = 'table'; // Display the table as a table
            resultsPlaceholder.style.display = 'none'; // Hide the placeholder
            // Here, you can populate the table with data for the selected area
            // Example: You can add rows and cells to display results.
        }
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
