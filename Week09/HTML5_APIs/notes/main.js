/**HTML5:
 * --The data- Attribute:
 * -data- attribute is a way of embedding data in a web page using custom attributes taht are ignored by the browser
 * it is alsos private to a page, so their unique purpose is to be used by a Javascript program
 * its attributes  can be decided by the developer but thery must follow this format:
 * Start with data-.
 * Contain only lowercase letters, numbers, hyphens, dots, colons or underscores.
 * Include an optional string value.
 * example:
 * data-powers = 'flight superSpeed'
 * data-rating = '5' //find all the elements that have a data rating value of 3 or more
 * data-dropdown //dropdown menu
 * data-user = 'DAZ' 
 * data-max-length = '32'
 // Each element has a dataset property that can be used to access any data- attributes it conatains:
<div id = 'hero' data - powers = 'flight superSpeed'>Superman </div>
    */
//accessingto data-powers:
const superman = document.getElementById('hero');
const powers = superman.dataset.powers;

// for older browsers support:
const powers = superman.getAttribute('data-powers');

//converting a string in a number:
const maxLength = Number(element.dataset.maxLength);

/**HTML5 APIs
 * APIs that help to gain access to hardware, such as cameras, batteries, geolocation,
 *  and the graphics card. Hardware evolves quickly, 
 */

/**HTML5 Web Storage
 * The Web Storage API provides a key-value store on the clients's computer that store information
 * about users, and specifici inforamtion that can be used during future sessions
 * -The Web Storage API differences with cookies:
 * Information stored is not shared with the server on every request.
 * Information is available in multiple windows of the browser (but only if the domain is the same).
 * Storage capacity limit is much larger than the 4KB limit for cookies ( There is no actual limit in the specification, but most browsers have a limit set at 5GB per domain.).
 * Any data stored does not automatically expire as it does with cookies. This potentially makes cookies a better choice for something like showing a popup once a day.
 */

//storing information. To save a value locally:
localStorage.setItem('name', 'Walter White');

//To illustrate that it’s being saved locally, try completely closing your browser, reopening it, and entering the following code in the console:
localStorage.getItem('name');

//Rather than using the getItem() and setItem() methods, assignment can be used instead. simply reference localStorage.name as if it was a variable to change its value:
localStorage.name = 'Heisenberg';
console.log(localStorage.name);

//To remove an entry from local storage, use the removeItem method or delete operator:
localStorage.removeItem('name');
delete localStorage.name;

//To completely remove everything stored in local storage, use the clear() method:
localStorage.clear();


/**The event object sent by the event listener to the callback has a number of properties that provide information about the updated item:
 * key tells us the key of the item that changed
 * newValue tells us the new value to which it has been changed
 * oldValue tells us the previous value before it was changed
 * storageArea tells us if it is stored in local or session storage. */

//add an event listener that logs information about any changes to the Web Store:
addEventListener('storage', (event) => {
    console.log(`The${event.ket} was updated from ${event.oldValue} to ${event.newValue} and saved in ${event.storageArea}`)
}, false);

/**using JSON , we can store any Javascript object in loca storage:
 * //save the hero object:
 */
localStorage.setItem('superman', JSON.stringify(hero));

//retrieve the superhero as a JAvaScript object:
superman = JSON.parse(localStorage.getItem('superman'));

/**Geolocation
 * is used to obtain the geographical position of the device, so it can be used to find the user's
 * exact location, then link to nearby places or measure the speed at which the user is moving.
 * this information can be used to filter data based on your location .
 * because of privacy concerns , permission to use this has to be grantedby the user first:
 * navigator.geolocation.getCurrentPosition(youAreHere);
 */
//showan alert dialog that displays the user's coordinates:
function youAreHere(position) {
    console.log(`Latitude: ${position.coords.latitude}, Longitude:${position.coords.longitude}`);
}

/**The position object has several other properties that can be used to find out information about the location and movement of the device:
 * -position.speed property returns the ground speed of the device in meters per second.
 * -position.altitude property returns an estimate of the device’s altitude in meters above the WGS84 ellipsoid, which is a standard measurement for the center of the Earth.
 * -position.heading property returns the direction the device is moving in. This is measured as a bearing in degrees, clockwise from North.
 * -position.timestamp property returns the time that the position information was recorded. 
 * -position.accuracy property returns the accuracy of the latitude and longitude properties in meters, and can be used to know the town or city users are in,
 * while at other times you may need their exact position*/

/* --watchPostion() method call a callback funtion every time the position of the
 * device is updated. Returns an Id that can be used to reference the position being watched:*/
const id = navigator.geolocation.watchPosition(youAreHere);


/*--clearWatch() method can be used to stop: */
navigator.geolocation.clearWatch(id);

/**Web Workers
 * allows processes to be run in the background, adding support for oncurrency in javacript
 * */
//use the Worker() constructor function to create a new worker:
const worker = new Worker('task.js');

//posta message to the worker:
worker.postMessage('Hello');

//post message fron the worker:
self.postMessage('Finished');

//log anydata returnedfrom the worker to the console:
worker.addEventListener('message', (event) => {
    console.log(event.data);
}, false);


//When a worker has completed its task, it can be stopped using the terminate() method from within the main script:
worker.terminate();

//Or using the close() method from inside the worker script:
self.close();

/**Websockets
 * is a new protocol that allows two-way communication with a server - also known as push messaging.
 * so, a connection is kept open and responses are 'pushed to the client as soon as they are received
 * websocket.html
 */

/**Notifications API
 * allows us to show messages using the system's notifications.
 * Before we can send notifications , we need to get permission granted by the user by using requestPErmission() method of a Notification global object
 * //entering this code to the console:
 * if(window.Notification) {
    Notification.requestPermission();
}
* if it's set to granted , we can create a new notification using a cocnstrutor function :
if(window.Notification) {
    Notification.requestPermission()
    .then((permission) => {
        if(Notification.permission === 'granted') {
        new Notification('Hello JavaScript!');
        }
    });
}*/
/*The constructor function's first parameter is the title of the notification, 
* and is required. The function also accepts a second parameter, 
* which is an object of options. These include body that specifies any text 
* that you want to appear below the title, and icon where you can specify a
*  link to an image that will be displayed as part of the notification:
const notification = new Notification('JavaScript: Novice to Ninja',{
    body: 'The new book from SitePoint',
    icon: 'sitepointlogo.png'
});
//to close the notification:
notification.close();

//open a new window when the user clicked on the notification
notification.addEventListener('click', () => {
window.open('https://sitepoint.com')
}, false);*/


/**Multimedia
 * //An audio clip can be inserted into a page with the <audio> tag, using the src attribute to point to the audio file:
<audio src='/song.mp3' controls>
Your browser does not support the audio element.
</audio>
 
//A video clip can be inserted with the <video> tag, using the src attribute to point to the movie file:
<video src='http://movie.mp4' controls>
    Your browser does not support the video element.
</video>

//The audio or video element can be referenced by a variable using one of the DOM methods:
const video = document.getElementsByTagName('video')[0];

the play() method will start the clip playing from its current position:
video.play();

//The pause() method will pause the clip at its current position:
video.pause();

//The volume property is a number that can be used to set the audio volume:
video.volume = 0.9;

//The muted property is a boolean value that can be used to mute the audio:
video.muted = true;

//the currentTime property is a number value that can be used to jump to another part of the clip:
video.currentTime += 10; // jumps forward 10 seconds

//The playbackRate property is used to fast-forward or rewind the clip by changing its value. A value of 1 is playback at normal speed:
video.playbackRate = 8; // fast-forward at 8 times as fast

//The loop property is a boolean value that can be set to true to make the clip repeat in a loop:
video.loop = true;

//the duration property can be used to see how long the clip lasts:
video.duration;
*/

/**Checking Properties Are Available:
 *to ensure a value is returned, we should use an event listener that fires once the metadata has loaded:
video.addEventListener('loadedmetadata', () => { console.log(video.duration); });

//Audio and video clips also have a number of events that will fire when they occur, including:

* -The play event, which fires when the clip starts and when it resumes after a pause.

* -The pause event, which fires when the clip is paused.

* -The volumechange event, which fires when the volume is changed.

* -The loadedmetadata event, which we saw in the note above, and which fires when all the video's metadata has loaded.

//These events allow you to respond to any interactions the user has with the video.
// add an event listener to check whether the user has paused the video:
video.addEventListener('pause', () => {
console.log('The video has been paused'); }, false)
 */

/**Drawing with Canvas: 
<canvas id = 'canvas' width = '400' height = '400' > Sorry, but your browser does not support the canvas element </canvas>*/

//canvas can now be accessed in a JavaScript program using the document.getElementById() method:
const canvasElement = document.getElementById('canvas');

//The getContext() method is used to access the context:
const context = canvasElement.getContext('2d');

// The fill and stroke colors can be changed by assigning a CSS color to the fillStyle and strokeStyle properties respectively:
context.fillStyle = "#0000cc"; // a blue fill color 
context.strokeStyle = "#ccc"; // a gray stroke color

//The lineWidth property can be used to set the width of any line strokes drawn onto the canvas. It defaults to one pixel and remains the same until it’s changed:
context.lineWidth = 4;

/**The fillRect() method can draw a filled-in rectangle. 
 * The first two parameters are the coordinates of the top-left corner, 
 * the third parameter is the width, and
 *  the last parameter is the height. The following */
//produces a filled-in blue rectangle in the top-left corner of the canvas at coordinates (10,10) that is 100 pixels wide and 50 pixels high:
context.fillRect(10, 10, 100, 50);

//strokeRect() method produces a rectangle that is not filled in. This will draw the outline of a rectangle underneath the last one:
context.strokeRect(10, 100, 100, 50);

//moveTo() and lineTo() methods. These methods can be used together to produce a path
/**draw a thick red T shape onto the canvas by moving to the coordinates (150,50),
 * then drawing a horizontal line 30 pixels long, 
 * and finally moving to the middle of that line and drawing a vertical line 40 pixels long:*/
context.beginPath();
context.moveTo(130, 50);
context.lineTo(180, 50);
context.moveTo(155, 50);
context.lineTo(155, 90);
context.strokeStyle = '#c00';
context.lineWidth = 15;
context.stroke();

/**The arc() method can be used to draw an arc of a given radius from a particular point
 *The first two parameters are the coordinates of the center of the arc; 
 * the next parameter is the radius, followed by the start angle, then 
 * the finish angle (note that these are measured in radians). 
 * The last parameter is a boolean value that says whether the arc should be drawn counter-clockwise.
 * //draw a yellow circle of radius 30 pixels at center (200,200), since Math.PI * 2 represents a full turn:*/
context.beginPath();
context.arc(200, 200, 30, 0, Math.PI * 2, false);
context.strokeStyle = '#ff0';
context.lineWidth = 4;
context.stroke();

/** fillText() method is used to write text onto the canvas. 
 * The first parameter is the text to be displayed,
 *  next two parameters are the x and y coordinates, respectively.
 *  The font property can be used to set the font style used, 
 * otherwise the style is inherited from the canvas element’s CSS setting
 *  (note that it needs to be changed before the fillText() method is used to draw the text). 
 * //draw the text “Hello” in green at coordinates (20,50), as shown below.-*/
context.fillStyle = '#0c0'; // a blue fill color
context.font = 'bold 26px sans-serif';
context.fillText('Hello', 20, 200);