/**Clients and Servers
 * Client - web browser- , request a resource(a web page) from a server
 * Server, processes the request and sends back a response to the client
 * Ajax allows Javascript to request resources from a sever on behalf of the client.
 * the resources requested are usually JSON data or small fragments of text or HTML rather than the whole page
 * Asynchronous JavaScript and XML - different parts of the process:
 * Asynchronous,
 * "When a request for data is sent, the program doesn’t have to stop and 
 * wait for the response. It can carry on running, waiting for an event to
 *  fire when a response is received. By using callbacks to manage this,
 *  programs are able to run in an efficient way, 
 * avoiding lag as data is transferred back and forth."
 * JavaScript,
 * Ajax enabled Javascript to send equest and recieve responses from a server, allowing content to be updated in real time
 * XML,
 * when the term ajax was originally coined, XML documents were often used to return data.
 * nowadays, JSON is the most commonly used in Ajax. JSON also is natively supported in javascript,
 * so we can deal with javascript objects rather than having to parse XML files by using DOM methods
 * With the ecplosion in the use fo public APIs, ajax is used more than ever to transport data back and forth between sites.
 
 */
/**APIs - Application Programming Interface-
 * is a collection of methods that allows external access to another program or service.
 * so, developers are able to interac with the data and create mashuops of third party services like,
 * a weather site that have an API provides methods that return information about the weather in a given location, as temperature, wind speed etc.
 *  
 /**The Fetch API
  * is currently a living standard for requesting and sending data asynchronously across a network.
  * Uses promises to avoid callbk hell.
  * streamlines a nmber of cocepts that had become cumbersome when using the XMLHttpRequest object
  */
/**Basic Usage
 * fetch(), global method that only has one mandatory argument, which is the URL of the reource
 * we wish to fetch. 
fetch('https://example.com/data')
    .then( // code that handles the response )
        .catch( // code that runs if the server returns an error )*/

/** Rsponse Interface
 * Response objects have a number of properties and methods that allow us to process the response effectively.
 */
//use an if block to check if the request was successful, and throw and error otherwise:
const url = 'https:example.com/data';
/*fetch(url)
    .then((response) => {
        if (response.ok) {
            return response;

        }
        throw Error(response.statusText);
    })
    .then(response => //do something with response
        .catch(error => console.log('There was an error!'))*/

/**Some other properties of the Response object are:

headers – A Headers object containing any headers associated with the response
url – A string containing the URL of response
redirected – A boolean value that specifies if the response is the result of a redirect
type – A string value of 'basic', 'cors', 'error' or 'opaque'. A value of 'basic' is used for a response from the same domain.
A value of 'cors' means the data was received from a valid cross-origin request from a different
omain. A value of 'opaque' is used for a response received from 'no-cors' request from another domain, which means access to the data will be severely restricted. A value of 'error' is used when a network error occurs. */
/**Redirects
 * redirect() method can be used to redirect to another URL. 
 * It creates a new promises that resolves to the responsfron the redirected
 * /
 
 fetch(url)
.then( response => response.redirect(newURL)); // redirects to another URL
.then( // do something else )
.catch( error => console.log('There was an error: ', error))
 */

/**Text Response
 * text() method takes a stream of text from the response,
 * reads it to completion and
 * returns a promises that resolves to USVSting object that can be treated as a string in JavaScript
 
fetch(url)
    .then(response => response.text()); //transform the text stream into a javascript string
.then(text => console.log(text))
    .catch(error => console.log('there was an error: ', error))*/

/**File Responses
 * blob() method is used to read a file of raw data, such as an image or a spreadsheet.
 * once it has read the whole file, 
 * it returns a promise that resolves with a blob object
 * 
 * 
 * fetch(url)
.then( response => response.blob() ); // transforms the data into a blob object
.then( blob => console.log(blob.type) )
.catch( error => console.log('There was an error: ', error))
 */
/**JSON Response
 * json() method is used to deal with these by transforming a stream of JSON data into a promise that resolves to a javascript object
 * 
 * 
 * fetch(url)
.then( response => response.json() ); // transforms the JSON data into a JavaScript object
.then( data => console.log(Object.entries(data)) )
.catch( error => console.log('There was an error: ', error))
 */
/**Creating Esponse Objects*/
//Create your own response object using a constructor function:
const response = new response('Hey!', {
    ok: true,
    status: 200,
    statusText: 'Ok',
    type: 'cors',
    url: '/api'
});
/**REquest Interface
 * providing Request() object as an argument allows a number of options to be set about request
 * Rquest objects are created using the Request() constructor, and include:
 * url – The URL of the requested resource (the only property that is required).
 * method – a string that specifies which HTTP method should be used for the request. By default, this is 'GET'.
 * headers – This is a Headers objec that provides details of the request's headers.
 * mode – Allows you to specify if CORS is used or not. CORS is enabled by default.
 * cache – Allows you to specify how the request will use the browser's cache. 
 * credentials – Lets you specify if cookies should be allowed with the request.
 * redirect – Specifies what to do if the response returns a redirect. 
 */

/**Hypertext Transfer Protocol - HTTP-
 * when client(browser) makes a request to a server, the HTTP is use to tell the 
 * server what type of request is being made, then the server will deal with the request
 * The five most commonly used:
 * GET requests to retrieve resources
 * POST requests, usually used to create a resource but can actually perform any task
 * PUT requests to upsert, which means insert a resource or update it entirely
 * PATCH requests to make partial updates to a resource
 * DELETE requests to delete a resources.
 */
//A constructor function is used to create a new Request objec:
const request = new Request('https://example.com/data', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
});
/**Once the Request object is assigned to a variable, it can then be used
 *  as the parameter of the fetch() method:

fetch(request)
.then( // do something with the response )
.catch( // handle any errors)
 */
/**Alternatively, you can enter the URL and object directly as arguments of the fetch() method, without having to create a Request object:

fetch('https://example.com/data', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
})
.then( // do something with the response )
.catch( // handle any errors) */

/**Headers Interface
 * HTTP headers are used to pass on any additional about a request or response.
 * includes:
 *  the file-type of the reource,
 * cookie information,
 * authentication information and
 * when the resource was last modified
 * It can be used to create a Headers object, which can be added as a property of Request and REsponse objects 
 */
//create a new headers instance using a constructor
const headers = new Headers();
//he constructor function can be provided with an optional
//argument containing any initial header values:

const headers = new Headers({ 'Content-Type': 'text/plain', 'Accept-Charset': 'utf-8', 'Accept-Encoding': 'gzip,deflate' })


/*Headers objects properties:*/
//has() - can be used to check if the headers objects contains the header provided as an argument*/
headers.has('Content-Type');

//get() -returns the value of the header provided as an argument
headers.get('Content-Type');


//set()-can be used to set a value of an already existing header,or
//create a new header with the value provided as an argument if it does not already exist
headers.set('Content-Type', 'application/json');

//append()- adds a new header to theheaders object
headers.append('Accept-Encoding', 'gzip,deflate');

//delete() -removes the header provided as an argument
headers.delete('Accept-Encoding')

//keys(), values(), and entries() - Iterators that can be used to iterate over the headers key, values or entries (key and value p
for (const entry of headers.entries()) {

    console.log(entry);
}

/**Putting It All Together 
 * We can use the Headers, Request and Response objects to put together a typical example
 *  that sets up the URL, Request and Headers before calling the fetch() method
 
const url = 'https:example.com/data';
const headers = new Headers({ 'Content-Type': 'text/plain', 'Accept-Charset': 'utf-8', 'Accept-Encoding': 'gzip,deflate' })

const request = (url, {
    headers: headers
})

fetch(request)
    .then(function(response) {
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then(response => // do something with response )
        .catch(error => console.log('There was an error!'))*/

/**Receiving Information
 * create 2 files called ajax.html, ajax.js
 */

/**Sending Information 
//Create a simpleTo Do list application that sends information about a task to server in json format
//then recieves a response to confirm that the task has been saved on a server
* 
//create two files named todo.html and main.js*/
/**Most froms will have an:
 * action atribute- specifies the URL to use the form is sent witout using Ajax,
 * method attribute - specifies the HTTP verb to use.
 * These methods are available as properties of the form object, so
 * we could use these these properties to create generalized request ogject.
 */
const request = new Request(form.action, {
        method: form.method,
        header: headers,
        body: data

    })
    /**FormData
     * interface that makes it much easier to submit information in forms using Ajax.
     * It is created using a construtor function
     * helps to reduce the amount of code needed when submitting forms:
     */
const data = new FormData();
//add data to the form data instance as key-value pairs using the append() method:
data = new FormData(); // no form provided as an argument creates an empty form data instance

data.append('height', 75);


/** A Living Standard */
//get the data from the numer API:
$.ajax('http://numbersapi.com/random')
    .done(text => outputDiv.innerHTML = text);