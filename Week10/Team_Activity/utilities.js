/**create a function called getJSON(url). Add the code to make your function do a simple fetch request 
 * using the url argument that should get passed in, and return the response in JSON. */
//const url = 'https: //earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
export function getJSON(url) {
    return fetch(url)
        .then(function(response) { //.then(response => {if(....)})
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}
export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};