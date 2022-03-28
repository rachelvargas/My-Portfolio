//https://dr5hn.github.io/countries-states-cities-database/

//const countriesURL = 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json';
//const statesURL = 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json';
//const citiesURL = 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json';

async function getData() {
    let countries = getCollection('countries');
    if (!countries) {
        countries = addCollection('countries');
        await fetch(countriesURL)
            .then(response => response.json())
            .then(async(data) => {
                await data.array.forEach(element => { //OJO
                    countries.insert(element);
                    innerHTML = //OJO
                        ('.countries').append(`
                    <tr>
                    <td class="border3">
                    ${element.name} <span class="inline-block bg-gray-200 rounded-full px3 text-sm font-bold text-blue-500>${element.iso2}</span>
                    button class="tooltip inline-block align-middle float-right" onclick="filterStates(${c.id})"><svg viewBox="0 0 20 20" fill="green"></svg>Show States</button>
                    button class="tooltip inline-block align-middle float-right" onclick="toggleModal(${element.id}, 'countries')"><svg viewBox="0 0 20 20" fill="green" class="information"></svg>More Details</button>
                    </td></tr>`);


                });
            });
    }
    const states = getColletion('states');
    if (!states) {
        states = addCollection('states');
        await fetch(statesURL)
            .then(response => response.json())
            .then(async(data) => {
                await data.forEach((item) => {
                    states.insert(item);
                });
            });
    }

    const cities = getCollection('cities');
    if (!cities) {
        cities = addCollection('cities');
        await fetch(citiesURL)
            .then(response => response.json())
            .then(async(data) => {
                await data.forEach((item) => {
                    cities.insert(item);
                });
            });
    }

}
getData();

async function filterStates(result = null) {
    const statesCollection = getCollection('states');
    const statesParse = await statesCollection.find({
        country_id: parseInt(result)
    });
    const output = ('.states');
    output.html('');
    ('cities').html
});
}