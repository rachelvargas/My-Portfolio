//assign each og the buttons in the HTML file to a variable, to refer them later in the file
const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');


//assigning some URLs to variables:
const textURL = 'http://numbersapi.com/random';
const apiURL = 'http://api.chucknorries.io/jokes/random';

//assigningan event handler to each button
textButton.addEventListener('click', () => {
    fetch(textURL)
        .then(respones => {
            outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.text())
        .then(text => outputDiv.innerHTML = text)
        .catch(error => console.log('There was an error:', error))

}, false);

//And now for the Chuck Norris Fact button:
apiButton.addEventListener('click', () => {
    fetch(apiURL)
        .then(response => {
            outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())
        .then(data => outputDiv.innerText = data.value)
        .catch(error => console.log('There was an error:', error))
}, false);