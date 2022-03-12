/**create a function called getJSON(url). Add the code to make your function do a simple fetch request 
 * using the url argument that should get passed in, and return the response in JSON. */
//const url = 'https: //earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
//STEP 01
export function getJSON(url) {
    return fetch(url) //simple fetch request
        .then(function(response) { //.then(response => {if(....)})
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json(); //returning the response in json
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}
//STEP 02, provided code:
//simple Promisefied version of the method to return the current location of the user
//STEP 03, making getLocation function reusable anywhere by adding export keyword before the function
export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};