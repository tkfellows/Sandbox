document.addEventListener('DOMContentLoaded', makeAPIRequest);

function makeAPIRequest() {
    const url = 'https://rover.camera/api/v2/roads/coverage?=';
    const apiKey = 'zCRcdK6ZYWL3zu5H73YHgfXf';
    const daysSincePatrolledMax = '2';
    const classNumber = '3';

    const requestData = {
        api_key: apiKey,
        days_since_patrolled_max: daysSincePatrolledMax,
        class_number: classNumber
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    };

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error('Error:', error));
}

function displayResults(data) {
    const resultElement = document.getElementById('apiResult');
    resultElement.textContent = JSON.stringify(data, null, 2);
}
