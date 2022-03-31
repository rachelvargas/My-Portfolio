//const countriesURL = 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json';
//const statesURL = 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json';
//const citiesURL = 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json';


//getting the reference for any time it is used here
let json = document.getElementById('json');


document.getElementById("gettingCountries").addEventListener("click", getCountries);


document.getElementById("gettingStates").addEventListener("click", getStates);


document.getElementById("gettingCities").addEventListener("click", getCities);


//  Enter a country title in the search box and press the button
function getCountries() {
    let countryList = document.getElementById('CountriesList'); //  where we will put our list of countries
    let countryTitle = document.getElementById('countries'); //  country title entry field
   let countryURL = new Request(`https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json`);



    //when any city searched
    if (countryTitle.length == 0) {
        countryList.innerText = "Please enter a Country to search for"
        return;
    }

    //  add counry to the search API
    countryURL += countryTitle.value;

    //  making the request
    fetch(countryURL)
        .then(response => response.json())
        .then(countries => {
            if (json.checked) {
                document.body.innerText = JSON.stringify(countries); //  if the box is clicked only show the JSON result
                return;
            }

            //innerHTML variable stracts data from JSON object and show it to the user
            let innerHTML = "<div class='grid-container'>";


            for (let country of countries.results) {
                //building a card for each country

                innerHTML +=
                    `<div class="grid-item"><h4> ${country.name} </h4><span class="inline-block bg-gray-200 rounded-full px3 text-sm font-bold text-gray-500 >${country.iso2}</span></div>`
            }
            innerHTML += "</div>";

            //taking the finished HTML and stuff it into the web page
            countryList.innerHTML = innerHTML


            for (let country of countries.results) {
                //  NOW we can add a click event listener for the image which will show us the movie details
                document.getElementById(country.name).addEventListener('click', countryDetails) //country.id??
            }
        });
}

//  The user can get more movie details by clicking on the movie poster to get to this code
function countryDetails() {
    let countryList = document.getElementById('countriesList'); //  this is where we will put our movie details

    //  the id of the image is the IMDB ID we want details on
    let countryURL = `https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json${this.name}`; //  search for movies with this name. this.id??

    //  using the country details API get additional data about the country
    fetch(countryURL)
        .then(response => response.json())
        .then(country => {
            if (json.checked) {
                document.body.innerText = JSON.stringify(country); //  if the box is clicked only show the JSON result
                return;
            }

            //innerHTML variable stracts data from JSON object and show it to the user
            let innerHTML = "<div class='grid-container'>";

            //data with this API. 
            innerHTML +=
                `<div class ="grid-item">
        <h4><strong> Country Name:</strong> ${country.name}</h4>
    <h3><strong>Capital:</strong> ${country.capital}</h3> 
    <h3> <strong>Acronym:</strong> ${country.iso3} </h3> 
    <h3> <strong>Navite:</strong> ${country.native}</h3>
    <h3><strong>Region:</strong> ${country.region}</h3>

    <ul>`;
            innerHTML += "</ul></div></div>";
            countryList.innerHTML = innerHTML


        });
}


//  Enter a state name in the search box and press the button
function getStates() {
    let stateList = document.getElementById('statesList');
    let stateTitle = document.getElementById('states'); //   states title entry field
    let stateURL = `https: //raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json`;

    ///when any city searched
    if (stateTitle.length == 0) {
        stateList.innerText = "Please enter a State to search for"
        return;
    }

    //adding state to the search API
    stateURL += stateTitle.value;

    //  make the request
    fetch(stateURL)
        .then(response => response.json())
        .then(states => {
            if (json.checked) {
                document.body.innerText = JSON.stringify(states); //  if the box is clicked only show the JSON result
                return;
            }

            //stract data from JSON object and show it to the user
            let innerHTML = "<div class='grid-container'>";


            for (let state of states.results) {
                //a card for each movie
                innerHTML +=
                    `<div class ="grid-item"><h4> State Name: ${state.name}</h4><h4>Country: ${state.country_name}</h3></div>`

            }
            innerHTML += "</div>";

            //the finished HTML and stuff it into the web page
            stateList.innerHTML = innerHTML


            //creates the individual elements for each state
            for (let state of states.results) {
                //  NOW we can add a click event listener for the image which will show us the movie details
                document.getElementById(state.name).addEventListener('click', stateDetails) //state.id??
            }
        });
}


function stateDetails() {
    let stateList = document.getElementById('stateList'); //  this is where we will put our state details

    let stateURL = `https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json`;

    // getting additional data about the state
    fetch(stateURL)
        .then(response => response.json())
        .then(state => {
            if (json.checked) {
                document.body.innerText = JSON.stringify(state); //  if the box is clicked only show the JSON result
                return;
            }

            //stract data from JSON object and show it to the user
            let innerHTML = "<div class='grid-container'>";

            //some data with this API. 
            innerHTML +=
                `<div class ="grid-item">
        <h4> <strong>State Name: </strong>${state.name}</h4>
    <h3><strong>Country Name:</strong> ${state.country_name}</h3> 
    <h3> <strong>Type:</strong> ${state.code} </h3> 
    <h3> <strong>Country Code: </strong>${state.country_code}</h3>
    <h3><strong>State Code:</strong> ${state.state_code}</h3>

    <ul>`;
            innerHTML += "</ul></div></div>";
            countryList.innerHTML = innerHTML


        });
}


//  Enter a state name in the search box and press the button
function getCities() {
    let cityList = document.getElementById('citiesList');
    let cityTitle = document.getElementById('cities'); //   cities title entry field
    let cityURL = `https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json`;

    ///when any city searched
    if (cityTitle.length == 0) {
        cityList.innerText = "Please enter a City to search for"
        return;
    }

    //adding city to the search API
    cityURL += cityTitle.value;

    //  make the request
    fetch(cityURL)
        .then(response => response.json())
        .then(cities => {
            if (json.checked) {
                document.body.innerText = JSON.stringify(cities); //  if the box is clicked only show the JSON result
                return;
            }

            //stract data from JSON object and show it to the user
            let innerHTML = "<div class='grid-container'>";


            for (let city of cities.results) {
                //a card for each movie
                innerHTML +=
                    ` <div class = "grid-item" > <h4> City Name: ${city.name} </h4><h4>Country: ${city.state_name}</h3> </div>`

            }
            innerHTML += "</div>";

            //the finished HTML and stuff it into the web page
            stateList.innerHTML = innerHTML


            //creates the individual elements for each state
            for (let city of cities.results) {
                //  NOW we can add a click event listener for the image which will show us the movie details
                document.getElementById(city.name).addEventListener('click', cityDetails) //state.id??
            }
        });
}


function cityDetails() {
    let cityList = document.getElementById('citiesList'); //  this is where we will put our city details

    let cityURL = `https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json`;

    // getting additional data about the state
    fetch(cityURL)
        .then(response => response.json())
        .then(cities => {
            if (json.checked) {
                document.body.innerText = JSON.stringify(cities); //  if the box is clicked only show the JSON result
                return;
            }

            //stract data from JSON object and show it to the user
            let innerHTML = "<div class='grid-container'>";

            //some data with this API. 
            innerHTML +=
                `<div class ="grid-item">
        <h4><strong> City Name:</strong> ${city.name}</h4>
    <h3><strong>Country Name:</strong> ${city.country_name}</h3> 
    <h3> <strng>State Name: </strong>${city.state_name} </h3> 
    <h3> <strong>Country Code:</strong> ${state.country_code}</h3>
    <h3> <strong>State Code:</strong> ${city.state_code}</h3>

    <ul>`;
            innerHTML += "</ul></div></div>";
            countryList.innerHTML = innerHTML


        });
}
