const URL = 'wss://echo.websocket.org/'; //connect to the websocket
const outputDiv = document.getElementById('output'); //store  a reference to the <div> element where will be displaying the messages
const form = document.forms[0]; //store a reference to the form element
const connection = new WebSocket(URL); //stores a reference to our websoket object. create an instance of a WebSocket object and tries to connect to the URL

//use the variable connection to refer to the websocket connection throughout the program.
//addan event handler
connection.addEventListener('open', () => {
    output('CONNECTION'); //output messages to the screen
}, false);

function output(message) {
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
    output(`SENT: ${text}`);
    connection.send(text); //sends the message to the  URL that webocket is connected to

    //create an event handler to deal with the response
    connection.addEventListener('message', (event) => {
        output(`RESPONSE: ${event.data}`);
    }, false);


    //adding more events to connection object responds
    connection.addEventListener('close', () => { //close event occurs when the connection is closed by using close() method
        output('DISCONNECTED');
    }, false);

    connection.addEventListener('error', (event) => { //error event is fired when any sort of error occurs with the connection
        output(`<span style='color:red;'>ERROR: ${event.data}</span>`); //data property give access to the information about error
    }, false)


}