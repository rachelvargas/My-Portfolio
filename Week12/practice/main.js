//getting the reference
//let json = ducment.getElementById('json');

//adding event listeners to the button on the HTML page
document.getElementById('getCities').addEventListener('click', getCities);

//the country code. example, the United States is "US"
id = country.code; //currency[0]

/*Getting the list of ciites which have the same name title the user has entered by clicking the submit button*/
function getCities() {
    let cityList = document.getElementById('cityList'); //list of cities
    let cityTitle = document.getElementById('city'); //city title entry field
    let url = `https://world-geo-data.p.rapidapi.com/cities/5128581/`;

    //when any city searched
    if (cityTitle.length == 0) {
        cityList.innerText = "Please enter a City to search for"
        return;

    }

    //adding a city to the search API
    url += cityTitle.value;

    //maikng the request
    fetch(url)
        .then(response => response.json())
        .then(cities => {
            if (json.checked) { //the chechkbox for JSON only
                document.body.innerText = JSON.stringify(cities); //I the box is checked only show the JSOn result
                return;

            }

            //innerHTML variable stracts data from JSON object and show it to the user
            let innerHTML = "<div class='grid-container'>";

            //creating nice card for each city with the same name,
            //OJO
            for (let city of cities.results) {
                innerHTML += `<div class="grid-item"> <h4>${city.name}</h4><h4>Country: ${city.country[1]}</h4></div>`

            }
            innerHTML += "</div>";

            //finishing HTML into the web page
            //OJO
            id = country.code; //currency[0]
            cityList.innerHTML = innerHTML

            for (let city of cities.results) {
                document.getElementById(city.id).addEventListener('click', cityDetails)

            }
        });
}
//getting some more details of  the city by clicking the code of the country 

function cityDetails() {
    let cityList = document.getElementById('cityList');
    let url = `https://world-geo-data.p.rapidapi.com/cities/5128581/${this.country.code}`;
    //look for cities with this country ID or code

    //getting he city details API
    fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "world-geo-data.p.rapidapi.com",
                "x-rapidapi-key": "e97717b644msh0449e20dd9955e0p10b925jsn1fa760646b88"
            }

        })
        .then(response => response.json())
        .then(cities => {
            if (json) { //the chechkbox for JSON only
                document.body.innerText = JSON.stringify(cities); //I the box is checked only show the JSOn result
                return;

            }

            //innerHTML variable stracts data from JSON object and show it to the user
            //timezone.timezone
            //timezone[0]
            let innerHTML = "<div class='grid-container'>";


            innerHTML += `<div class="grid-item"> 
            <h4>Description: ${city.name}</h4>
            <h4>Country: ${city.country[1]}</h4>
            <h4>Time Zone: ${timezone[0]}</h4>
            <h4>Population: ${population}</h4>
            <h4>Longitude: ${longitude}</h4>
            <h4>Latitude: ${latitude}
            <h4>Wiki Url: ${wiki_url}</h4>
            </div>`

        });
}

/*univeral tutoria token
XvpW0pkPMC6WbHUyCrWj6BwdVL4RJ6r-S7ARscLU74lFqIDCoUnV_hj9E7SSBCf4b-s*/



/**let new_h2 = document.createElement("h2")
    let new_p1 = document.createElement("p")
    let new_p2 = document.createElement("p")



    let new_list = document.createElement("ul");
    let name_li = document.createElement("li");
    let model_li = document.createElement("li");
    let mfg_li = document.createElement("li");


    new_h2.textContent = "Starship Name: " + ship.name;
    new_p1.textContent = "Model: " + ship.model;
    new_p2.textContent = "Manufacturer: " + ship.manufacturer;

    name_li.append(new_h2);
    model_li.append(new_p1);
    mfg_li.append(new_p2);
    new_list.append(name_li);
    new_list.append(model_li);
    new_list.append(mfg_li);
    info_section.append(new_list); */

/*fetch("https://world-geo-data.p.rapidapi.com/cities/5128581", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "world-geo-data.p.rapidapi.com",
            "x-rapidapi-key": "e97717b644msh0449e20dd9955e0p10b925jsn1fa760646b88"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });*/




/**const URL = 'wss://echo.websocket.org/'; //connect to the websocket
const outputDiv = document.getElementById('output'); //store  a reference to the <div> element where will be displaying the messages
const form = document.forms[0]; //store a reference to the form element
const connection = new WebSocket(URL); //stores a reference to our websoket object. create an instance of a WebSocket object and tries to connect to the URL

//use the variable connection to refer to the websocket connection throughout the program.
//addan event handler
connection.addEventListener('open', () => {
    output('CONNECTION'); //output messages to the screen
}, false);

function output(message) { //
    const para = document.createElement('p');
    para.innerHTML = message;
    outputDiv.appendChild(para);
    // add some code to allow us to add some messages, by adding an event listener to deal with when the form is submitted:
    form.addEventListener('submit', message, false);
}
// invokes a function called message():
function message(event) {
    event.preventDefault();
    const text = form.message.value;
    output(`
                SENT: $ { text }
                `);
    connection.send(text); //sends the message to the  URL that webocket is connected to

    //create an event handler to deal with the response
    connection.addEventListener('message', (event) => {
        output(`
                RESPONSE: $ { event.data }
                `);
    }, false);


    //adding more events to connection object responds
    connection.addEventListener('close', () => { //close event occurs when the connection is closed by using close() method
        output('DISCONNECTED');
    }, false);

    connection.addEventListener('error', (event) => { //error event is fired when any sort of error occurs with the connection
        output(` < span style = 'color:red;' > ERROR: $ { event.data } < /span>`); / / data property give access to the information about error
            }, false)


    } */