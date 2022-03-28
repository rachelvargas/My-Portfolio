/*var req = unirest("GET", "https://www.universal-tutorial.com/api/getaccesstoken");

req.headers({
    "Accept": "application/json",
    "api-token": "XvpW0pkPMC6WbHUyCrWj6BwdVL4RJ6r-S7ARscLU74lFqIDCoUnV_hj9E7SSBCf4b-s",
    "user-email": "angeles.vargas@ymail.com",
    "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtdmdhZGFnaUBnbWFpbC5jb20ifSwiZXhwIjoxNTY2MjM0ODU0fQ.nMWPN38zptwwDKAo11bFyjhCRuzNhZc6NqqCaYJVxP0"
});*/


/**fetch("https://countries-cities.p.rapidapi.com/location/city/5128580", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "countries-cities.p.rapidapi.com",
            "x-rapidapi-key": "e97717b644msh0449e20dd9955e0p10b925jsn1fa760646b88"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });*/
/*const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com',
        'X-RapidAPI-Key': 'e97717b644msh0449e20dd9955e0p10b925jsn1fa760646b88'
    }
};

fetch('https://countries-cities.p.rapidapi.com/location/city/5128580', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));*/
/*var headers = new Headers();
headers.append("X-CSCAPI-KEY", "API_KEY");

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

fetch("https://api.countrystatecity.in/v1/countries/IN/cities", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error)); */


var headers = new Headers();
headers.append("X-CSCAPI-KEY", "API_KEY");

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

fetch("https://api.countrystatecity.in/v1/countries/IN/cities", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));