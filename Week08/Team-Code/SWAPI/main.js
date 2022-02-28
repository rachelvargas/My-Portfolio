async function getJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            const swapi = await response.json();
            return swapi;
        }

    } catch (error) {
        console.log(error);
    }
}

function getShips(url) {
    return getJSON(url);
} //ojo

function renderList(ships, listElement) {
    //displaying the table 
    const list = listElement.children[1];
    list.innerHTML = "";
    ships.forEach(function(e) {
        //console.log(e);
        //creating elements for list tr
        let item = document.createElement('tr');
        item.innerHTML = `
        <td><a href="${e.url}">${e.name}</a></td>
        <td>${e.crew}</td>
        <td>${e.model}</td>
        <td>${e.starship_class}</td>
        `;

        item.addEventListener("click", function(event) {
            event.preventDefault();
            getDetails(e.url);
        });
        //adding the list item to the list
        list.appendChild(item);
    });
}
//rending the details
function renderDetails(data) {
    console.log(data);
}
//controller
async function showShips(url = "https://swapi.dev/api/starships/") {
    const results = await getShips(url);

    //getting the list element
    const listElement = document.getElementsById("ships");
    renderList(results.results, listElement);

    //next and prev button
    if (results.next) {
        const next = document.getElementById("next");
        next.ontouchend = () => {
            //to show the next page, recall the showships function with a new url
            showShips(data.next) //ojo

        };
    }
    if (results.previous) {
        const prev = document.getElementById("prev");
        prev.ontouchend = () => {
            showShips(data.previous);
        };
    }

}
async function getDetails(url) {
    const ship = await getShips(url);
    renderDetails(ship);

}
showShips();