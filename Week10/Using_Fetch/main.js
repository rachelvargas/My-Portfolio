/**Using the Fetch API
 * --Fetch API provides a JavaScript interface for acessing and manipulating parts of the HTTP pipeline, such as resquest and responses
 * Also provide a global fetch() method that provides an easy logical way to fetch network resources 
 * Fetch() wont' rejet on HTTP error status and,
 * won't send cross-origin cookies unless you set the credetials init option
 * 
 */
//fetch quest:
/** to extract the JSON body content from the Response object, we use the json() method, which returns a second 
 * promise that resolves with the result of parsing the response body text as JSON. */
fetch('http://example.com/movies.json')
    .then(response => response.json()) //promise with response object
    .then(data => console.log(data));

/**Supplying request options
 * fetch method can optionaly accept a second parameter, an init object that allows us to control a number of different settings
 */
//fetchwithfull options available and more details:
//POST method:
async function postData(url = '', data = {}) {
    //defaultoptions are marked with * 
    const response = await fetch(url, {
        method: 'POST', //*GET, POST, PUT, DELETE, etc
        mode: 'cors', //no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', //include, *same-origin, omit
        headers: {
            'Content-type': 'application/json'
                // 'Content-Type: 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', //manual, *follow, error
        referrerPolicy: 'no-referrer',
        /*no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, 
        same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url*/
        body: JSON.stringify(data) //body data type must match "Concept-Type" header
    });
    return response.json(); //parses JSON response into native JavaScript onjects
}
postData('https://example.com/answer', {
        answer: 42
    })
    .then(data => {
        console.log(data); //JSON data parsed by `data.json()`  call
    });

/**Sending  a request with credentials included */
fetch('https://example.com', {
    credentials: 'include'
});

/**If you only want to send credentials if the request URL is on the same origin as the calling script, add credentials: 'same-origin'.*/

// The calling script is on the origin 'https://example.com'

fetch('https://example.com', {
    credentials: 'same-origin'
});

/*To instead ensure browsers don 't include credentials in the request, use credentials: '
omit '.*/

fetch('https://example.com', {
    credentials: 'omit'
})

/**Uploading JSON data: */
//use fetch () to POSTJSON-encoded data
const data = {
    username: 'example'
};
fetch('https://example.com/profile', {
        method: 'POST', //or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    })

/**Uploading a file */
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);
fetch('https://example.com/profile/avatar', {
        method: 'PUT',
        body: formData
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.error("Error:", error);
    });

/**Uploading multiple files */
const formData = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');
formData.append('title', 'My Vegas Vacation');
for (let i = 0; 1 < photos.files.length; i++) {
    formData.append(`photos_${i}`, photos.files[i]);
}
fetch('https://example.com/posts', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });

/**Processing a text file line by line */
/**shows one way to do this by creating a line iterator (for simplicity, 
 * it assumes the text is UTF-8, and doesn't handle fetch errors) */
async function* makeTextFileLineIterator(fileURL) {
    const utf8Decoder = new TextDecoder('utf-8');
    const response = await fetch(fileURL);
    const reader = response.body.getReader();
    let {
        value: chunk,
        done: readerDone
    } = await reader.read();
    chunk = chunk ? utf8Decoder.decode(chunk) : '';

    const re = /\n|\r|\r\n/gm;
    let startIndex = 0;
    let result;

    for (;;) {
        let result = re.exec(chunk);
        if (!result) {
            if (readerDone) {
                break;
            }
            let remainder = chunk.substr(startIndex);
            ({
                value: chunk,
                done: readerDone

            } = await reader.read());
            chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : '');
            startIndex = re.lastIndex = 0;
            continue;
        }
        yield chunk.substring(startIndex, result.index);
        startIndex = re.lastIndex;
    }
    if (startIndex < chunk.length) {
        //last line didn't end in a newline char
        yield chunk.substr(startIndex);
    }
}
async function run() {
    for await (let line of makeTextFileLineIterator(urlOfFile)) {
        processLine(line);
    }
}
run();

/**Checking that the fetch was successful */
fetch('flowes.jpg')
    .then(response => {
        if (!response.ok) {
            throw new Error('Netork response was not OK');
        }
        return response.blob();
    })
    .then(myBlob => {
        myImage.src = URL.createObjectURL(myBlob);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

/**Supplying your own request object */
const myHeaders = new Headers();

const myRequest = new Request('flowers.jpg', {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
});
fetch(myRequest)
    .then(response => response.blob())
    .then(myBlob => {
        myImage.src = URL.createObjectURL(myBlob);
    });

//create a copy of the  Request()object:
/**Making a copy like this allows you to make use of the request/response 
 * again while varying the init options if desired. The copy must be made 
 * before the body is read,
 *  and reading the body in the copy will also mark it as read 
 * in the original request. */
const anotherRequest = new Request(myRequest, myInit);

/**clone() method also create a copy  */

/**Headers
 * headers interface allows us to create our own headers object via the Headers() constructor.
 * a headers object is a simple multi-map of names to values:
 */
const content = 'Hello World';
const myHeaders = new Headers();
myRequest.append('Content-Tyoe', 'text/plain');
myHeaders.append('ContentLength', content.length.toString());
myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');


/**The same can be achieved by passing an array of arrays or an object literal to the constructor: */
const myHeaders = new Headders({
    'Content-Type': 'text/plain',
    'Content-Length': content.length.toString(),
    'X-Custom-Header': 'ProcessThisImmediately'

});

//the contents can bequeried and retrieved:
console.log(myHeaders.has('Content-Type')); //true
console.log(myHeaders.has('Set-Cookie')); //false
myHeaders.set('Content-Type', 'text/html');
myHeaders.append('X-Custom-Header', 'AnotherValue');

console.log(myHeaders.get('Content-Length')); //11
console.log(myHeadersget('X-Custom-Header')); //['ProcessThisImmediately], 'AnotherValue']

myHeaders.delete('X-Custom-Header');
console.log(myHeaders.get('X-Custom-Header')); //null

/**checking whether the content type is correct before we process it further */
fetch(myRequest)
    .then(response => {
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new TypeError("Oops, we haven't got JSON!");
        }
        return response.json();
    })
    .then(data => {
        //process our data further
    })
    .catch(error => console.error(error));

/**Guard
 * guard property is not exposed to the web but affects which mutation operations are allowed on the headers object
 */
/**some guard values:
 * -none: default.
 * -request: guard for a headers object obtained from a request (Request.headers).
 * -request-no-cors: guard for a headers object obtained from a request created with Request.mode no-cors.
 * -response: guard for a headers object obtained from a response (Response.headers).
 * -immutable: guard that renders a headers object read-only; mostly used for ServiceWorkers.
 */

/**Response objects
 * //The most common response properties you'll use are:
 * -Response.status — An integer (default value 200) containing the response status code.
 * -Response.statusText — A string (default value ""), which corresponds to the HTTP status code message. Note that HTTP/2 does not support status messages.
 * -Response.ok —  a shorthand for checking that status is in the range 200-299 inclusive. This returns a boolean value.
 */
/**They can also be created programmatically via JavaScript, 
 * but this is only really useful in ServiceWorkers, 
 * when you are providing a custom response to a received request
 *  using a respondWith() method:*/
const myBody = new Blob();

addEventListener('fetch', function(event) {
    // ServiceWorker intercepting a fetch
    event.respondWith(
        new Response(myBody, {
            headers: { 'Content-Type': 'text/plain' }
        })
    );
});

/**Body
 * is an instance of any of these types:
 * ArrayBuffer
 * ArrayBufferView (Uint8Array and friends)
 * Blob/File
 * string
 * URLSearchParams
 * FormData
 */

/**The Request and Response interfaces share the following methods to extract a body.
 *  These all return a promise that is eventually resolved with the actual content:
 * Request.arrayBuffer() / Response.arrayBuffer()
 * Request.blob() / Response.blob()
 * Request.formData() / Response.formData()
 * Request.json() / Response.json()
 * Request.text() / Response.text() */

//request bodies can be set by passing body parameters:
const form = new FormData(document.getElementById('login-form'));
fetch('/login', {
    method: 'POST',
    body: form
});

/**Feature detection
 * Fetch API support can be detected by checking for the existence of Headers, Request, Response or fetch() on the Window or Worker scope:*/

if (window.fetch) {
    // run my fetch request here
} else {
    // do something with XMLHttpRequest?
}