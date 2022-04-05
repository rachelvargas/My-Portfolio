//const countriesURL = 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json';
//const statesURL = 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json';
//const citiesURL = 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json';



document.getElementById("getCountries").addEventListener("click", getCountries);
document.getElementById("getStates").addEventListener("click", getStates);
document.getElementById("getCities").addEventListener("click", getCities);

//GETTING COUNTRIES

let allCountries;

//  Calling the json data. (making the request)
fetch("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json")
    .then(response => response.json())
    .then(countries => {
        allCountries = countries;
    });

//  Enter a country title in the search box and press the button
function getCountries() {
    let countryList = document.getElementById('countryList'); //  where we will put our list of countries
    let countryTitle = document.getElementById('country'); //  country title entry field

    //when any city searched
    if (countryTitle.length == 0) {
        countryList.innerText = "Please enter a Country to search for";
        return;
    }

    //let country = allCountries.filter(c => c.name === countryTitle.value);
    //innerHTML variable stracts data from JSON object and show it to the user
    let innerHTML = "";

    for (let country of allCountries) {
        //building a card for each country
        innerHTML += `
            <div class="grid-item" id="${country.name}">
                <h4>${country.name}</h4>
                <span class="inline-block bg-gray-200 rounded-full px3 text-sm font-bold text-gray-500" >${country.iso2}</span>
            </div>`
    }
    innerHTML += "<div class='grid-container'>" + innerHTML + "</div>";

    //taking the finished HTML and stuff it into the web page
    countryList.innerHTML = innerHTML


    for (let country of allCountries) {
        //  NOW we can add a click event listener which will show us the country details
        document.getElementById(country.name).addEventListener('click', countryDetails) //country.id??
    }

};

//  The user can get more movie details by clicking on the country name to get to this code
function countryDetails(event) {
    let countriesList = document.getElementById('countriesList'); //  this is where we will put our movie details

    let countryName = event.currentTarget.id;
    console.log(countryName)

    let country = allCountries.filter(c => c.name === countryName)[0];


    //innerHTML variable stracts data from JSON object and show it to the user
    let innerHTML = "<div class='grid-container'>";

    //data with this API. 
    innerHTML += `
    
    <div class ="grid-item">
    <h2><strong>Country Name:</strong> ${country.name}</h2>
    <h3><strong>Capital:</strong> ${country.capital}</h3> 
    <h3><strong>Acronym:</strong> ${country.iso3}</h3> 
    <h3><strong>Navite:</strong> ${country.native}</h3>
    <h3><strong>Region:</strong> ${country.region}</h3>

    <ul>`;
    
    innerHTML += "</div></div>";
    countriesList.innerHTML = innerHTML

}

//GETTING STATES
let allStates;

//calling the json data.(making the request)
fetch("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json")
    .then(response => response.json())
    .then(states => {
        allStates = states;
    });

//  Enter a country title in the search box and press the button
function getStates() {
    let stateList = document.getElementById('stateList'); //  where we will put our list of states
    let stateTitle = document.getElementById('state'); //  state title entry field

    //when any city searched
    if (stateTitle.length == 0) {
        stateList.innerText = "Please enter a State to search for";
        return;
    }

    //let country = allCountries.filter(c => c.name === countryTitle.value);
    //innerHTML variable stracts data from JSON object and show it to the user
    let innerHTML = "";

    for (let state of allStates) {
        //building a card for each country
        innerHTML += `
        
            <div class="grid-item" id="${state.name}">
            <h3>State Name: ${state.name}</h3><h4>Country: ${state.country_name}</h4>
            
            </div>`

    }
    innerHTML += "<div class='grid-container'>" + innerHTML + "</div>";

    //taking the finished HTML and stuff it into the web page
    stateList.innerHTML = innerHTML

    for (let state of allStates) {
        //  NOW we can add a click event listener for the image which will show us the movie details
        document.getElementById(state.name).addEventListener('click', stateDetails) //state.id??
    }

};

//  The user can get more movie details by clicking on the movie poster to get to this code
function stateDetails(event) {
    let statesList = document.getElementById('statesList'); //  this is where we will put our state details

    let stateName = event.currentTarget.id;
    console.log(stateName)

    let state = allStates.filter(s => s.name === stateName)[0];


    //innerHTML variable stracts data from JSON object and show it to the user
    let innerHTML = "<div class='grid-container'>";

    //data with this API. 
     innerHTML += `
     
     <div class ="grid-item">
        <h2><strong>State Name:</strong> ${state.name}</h2>
    <h3><strong>Country Name:</strong> ${state.country_name}</h3> 
    <h3><strong>Type:</strong> ${state.code}</h3> 
    <h3><strong>Country Code:</strong> ${state.country_code}</h3>
    <h3><strong>State Code:</strong> ${state.state_code}</h3>

    <ul>`;
    
    innerHTML += "</div></div>";
    statesList.innerHTML = innerHTML

}

//GETTING THE CITIES
let allCities;

// Calling the json data.( "making the request")
fetch("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json")
    .then(response => response.json())
    .then(cities => {
        allCities = cities;
    });

//  Enter a country title in the search box and press the button
function getCities() {
    let cityList = document.getElementById('cityList'); //  where we will put our list of countries
    let cityTitle = document.getElementById('city'); //  country title entry field

    //when any city searched
    if (cityTitle.length == 0) {
        cityList.innerText = "Please enter a City to search for";
        return;
    }

    //let city = allCities.filter(c => c.name === cityTitle.value);
    //innerHTML variable stracts data from JSON object and show it to the user
    let innerHTML = "";

    for (let city of allCities) {
        //building a card for each country

        innerHTML += `
        
        div class = "grid-item" id="${city.name}">        
        <h3>City Name: ${city.name}</h3>
        <h4>Country: ${city.state_name}</h4>
        
        </div>`

    }

    innerHTML += "<div class='grid-container'>" + innerHTML + "</div>";

    //taking the finished HTML and stuff it into the web page
    cityList.innerHTML = innerHTML


    for (let city of allCities) {
        //  NOW we can add a click event listener which will show us the city details
        document.getElementById(city.name).addEventListener('click', cityDetails) //city.id??
    }

};

//  The user can get more movie details by clicking on the city name to get to this code
function cityDetails(event) {
    let citiesList = document.getElementById('citiesList'); //  this is where we will put our movie details

    let cityName = event.currentTarget.id;
    console.log(cityName)

    let city = allCities.filter(c => c.name === cityName)[0];


    //innerHTML variable stracts data from JSON object and show it to the user
    let innerHTML = "<div class='grid-container'>";

    //data with this API. 
    innerHTML += `
    
    <div class="grid-item">
    <h2><strong> City Name:</strong> ${city.name}</h2>
    <h3><strong>Country Name:</strong> ${city.country_name}</h3> 
    <h3><strong>State Name:</strong>${city.state_name}</h3> 
    <h3><strong>Country Code:</strong> ${city.country_code}</h3>
    <h3><strong>State Code:</strong> ${city.state_code}</h3>

    <ul>`;
    
    innerHTML += "</div></div>";
    citiesList.innerHTML = innerHTML

}
