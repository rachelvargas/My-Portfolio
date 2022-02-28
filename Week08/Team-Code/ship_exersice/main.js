//assign each og the buttons in the HTML file to a variable, to refer them later in the file
const textButton = document.getElementById('number');
const outputDiv = document.getElementById('output');


//assigning some URLs to variables:
//const textURL = 'https://swapi.dev/api/starships/9/';
//const apijson = 'https://swapi.dev/api/starships/9/?format=json';
//const textURL = 'https://swapi.dev/api/starships/9/?format=json'
const textURL = 'https://swapi.dev/api/starships/'
    //const textURL = 'https://swapi.dev/api/people/?format=api'




//assigningan event handler to each button
textButton.addEventListener('click', () => {
    fetch(textURL)
        .then(response => {
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
class WarShips {
    getAllships() {
        return textURL;
    }
    getShipByName(name) {
        return textURL.find(ship => ship.name === name);
    }
}


//And now for the Chuck Norris Fact button:
/*apiButton.addEventListener('click', () => {
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
}, false);*/