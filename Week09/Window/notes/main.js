/**The Browser Object Model-BOM-
 * is a collection of properties and methods that contain information about the browser and computer screen
 * The BOM only makes sense in a browser environment, but 
 * they will still have a global object.
 * I you don't know the name of global object , you can efer to it using the keyword this.
 */
//quick way o assigning the variableglobal to the global object
// from within the global scope
const global = this;

/**Going Global
 * global variables can be accessed in all parts of the program,
 * are actual properties of a global object.
 *In the browser envronment, the global object is the window object, so any global vairalbe created is actually aproperty otf the window obkect:
 */
x = 6; // global variable created


window.x // same variable can be accessed as a property of the window object


// both variables are exactly the same
window.x === x;

//In general, you should refer to global variables without using the window object. An exception is fi you need to check whether a global variables has been define
if (x) {
    // do something
}
//If the variable is accessed as a property of the window object,the code will still workaswindow.x
if (window.x) {
    // do something
}

//parseInt() and isNAN() functions are methods of theglobal obeject:
window.parseInt(4.2);

window.isNaN(4.2);

//ES6 made parseInt() and isNaN() methods of the Number object, so they can be both be called using the following code:

Number.parseInt(4.2);

Number.isNaN(4.2);

/**Dialogs:
 * window.alert() method will pausethe execution of the program and display a message in a dialog box.
 * The message is provided as an argument to the method, and undefined is always returned
 * window.alert('Hello');
 * <<undefined
 * 
 * window.confirm() method will stop the excution of the program and display a confirmation dialog that shows the message provided as an argument , 
 * and givin the options of OK or Cancel.It returns the boolean values of true if the user clicks ok, and
 * false if the user clicks Cancel.
 * window.confirm('Do you wish to continue?');
<< undefined

window.prompt() method will stop the excution of the program.Displays a dialog that shows a message provided as an argument, as well as an inut field that allowas the user to enter text.
this text is then returned as a string when the user clicks Ok. If the user clicks Cancel. null is returned
window.prompt('Please enter your name:');

 */
window.alert('Hello');
window.confirm('Do you wish to continue?');
window.prompt('Please enter your name:');


/** Browser Information
 * The window object has a number of proeprties and methods that provide information about the user's browser
 */
/**Which Browser:
 * -window object has a navigator property that returns a reference to the Navigator object
 * -the Navigator object conatains information about the browser being used. 
 * Its userAgent property will return information about the browser and operation system being used
 * 
 */

//showing what I am using
window.navigator.userAngent

/**Location, Location, Location
 * -window.location property ia an object that contains information about the URL of the current page.
 * It contains a number of properties that provide information about different fragments of the URL.
 * -The href property returns the full URL as a string:
 * window.location.href
 * -The protocol property returns a string describing the protocol used (http, https, pop2, ftp etc)
 * window.location.protocol 
<< "https:"
* -the host property returns a string describing the domain of the current URL and the port nnumber 
window.location.host
<< "www.sitepoint.com"
*-The hostname property returns a string describing the domanin of the current URL:
window.location.hostname
<< "www.sitepoint.com"
* -The port property returns a string describing the port number, it will return an empty string if the port is not explicity sated in the URL:
window.location.port
<< ""
*-pathname property returns a string of the path that follows the domain:
window.location.pathname
<< "/premium/books/javascript-novice-to-ninja"
*-the search property returns a string that statrs with a "?" follwed by the query string parameters.
It returns an empty string if there are no query string parameters, 
window.location.search
<< "?q=javascript&limit=24&offset=0&page=1&
content_types[]=All&slugs[]=all&states[]=available&order="
*-the hash property returns a string that starts with a "#" followed by the fragment identifier.
It returns an empty string if there is no fragment identifier
window.location.hash
<< ""
*-origin property returns a string that shows the protocol and domain where the current page originated from.
This property is read-only, so cannot be change:
window.location.origin
<< "https://www.sitepoint.com"
 */

window.location.href

//redirect the page to the SitePoint Javascript channel:
window.location.href = 'https://www.sitepoint.com/javascript/'

window.location.protocol

window.location.host

window.location.hostname

window.location.port

window.location.pathname

window.location.search

window.location.hash

window.location.origin

/**window.location has these methods:
 * -The assign()method can be used to load another resource from a URLprovided as a parameter:
 * window.location.assign('https://www.sitepoint.com/')
 * -The replace() , the current page will not be stored in the session history, so the user will be unable to navigaate back to it using the back button
 * -The toString() method returns a string conatining the whole URL:
 * window.location.toString();
<< "https://www.sitepoint.com/javascript/"
 */
window.location.assign('https://www.sitepoint.com/')
window.location.toString();

/**The Browser History
 * -the window.history property can be used to access information about any previously visited pages in the current browser session.
 * -the window.history.length property shows how many pages have been visited before arrigving at the current page
 * -the window.history.go() methodcan be used to go to a specific page, where 0 is the current page:
 * window.history.go(1); // goes forward 1 page
window.history.go(0); // reloads the current page
window.history.go(-1); // goes back 1 page

-the window.history.forward() and window.history.back() methods can be used to navigate forwards and backwards by one page respectivey,
 */
window.history.go(1); // goes forward 1 page
window.history.go(0); // reloads the current page
window.history.go(-1); // goes back 1 page

/**Controlling Windows
 * -The window.open() method, takes the URL of the page to be opened as its first parameter, 
 * the window title as its second parameter, and 
 * a list of attributes as the third parameter and can be assign to a variable:
 * const popup = window.open('https://sitepoint.com','
SitePoint','width=400,height=400,resizable=yes');
*-the close() method can be used to close a window, assuming we have a reference to it:
popup.close();
*-the window.moveTo() method takes two parameters that are the X And Y coordinates of the screen that the window is to be move to 
window.moveTo(0,0); // will move the window to the top-left corner of the screen
*-the window.resizedTo() method takes two parameters that specify the width and height of the resized window's dimmensions:
window.resizeTo(600,400);
 */
const popup = window.open('https://sitepoint.com', 'SitePoint ', 'width = 400, height = 400, resizable = yes ');
popup.close();
window.moveTo(0, 0); // will move the window to the top-left corner of the screen
window.resizeTo(600, 400);
//BE CARFULLY BEFORE USING THESE METHODS ABOVE!

/**Screen Information
 * -the window.screen object conatins information about the screen the browser is displayed on.
 * -the availHeight and availWidth can be used to find the heigth and width of the screen, excluding any operation system menus:
 * -the colorDepth property can be used to find the color bit depth of the user's 
 * window.screen.colorDepth;
<< 24
 */

//find the height and width of the screen in pixels:
window.screen.height

window.screen.width

window.screen.availWidth

window.screen.availHeight

window.screen.colorDepth;

/**The Document Object:
 * --document.write():
 * -the write() method simply writes a string of text to the page.If a page has already loaded, it will completely replace the current document:
 * document.write('Hello, world!');
 * this method can also be used withing a document inside <script> tags to inject a string into the markup. but will not ovrewrite the rest of the HTML on the page
 */
document.write('Hello, world!');

//include HTML i the string which will become part of the DOM tree:
document.write('<h1>Hello, world!</h1>');

//place the text "Hello, World!" inside the<h1> tags and the rest of the page wil displays as normal:
/*<h1><script> document.write("Hello, world!")</script> </h1>*/

/**Cookies
 * are small files that are saved locally on a user's computer.Are usefull for retaining state information like user logged:
 * "name=Superman; hero=true; city=Metropolis"
 */
/**Creating Cookings:
 * //assign it to JAvascript's "cookie jar", using document.cookie property whic acts like a special type of string:
 * document.cookie = 'name=Superman';
<< "name=Superman"
 */
document.cookie = 'name=Superman';

//add more cookies by assigning them to document.cookie:
document.cookie = 'hero=true';

document.cookie = 'city=Metropolis';

/**changing Cookie Values
 * a cookie value can be change by reassignning it to document.cookie:
  
 */
document.cookie = 'name=Batman'
document.cookie = 'city=Gotham'

/**REading Cookies
 * simply enter document.cookie:
 */
document.cookie

//use split method to break the string into an array conatianing each name/value pair,
//then use a for of loopto iterate through the array:
const cookies = document.cookie.split("; ");
for (crumb of cookies) {
    const [key, value] = crumb.split("=");
    console.log(`The value of ${key} is ${value}`);
}



/** Cookie Expiry Dates*/
const expiryDate = new Date();
const tomorrow = expiryDate.getTime() + 100 * 60 * 60 * 24; //Day, DD-Mon-YYYY HH:MM:SS GMT
expiryDate.setTime(tomorrow);

document.cookie = `name=Batmand; expires=${ expiryDate.toUTCString()}`;

/**The Path and Domain of Cookies 
 * for security reasons, the cookies can only be read by pages inside the same directory and odmain as the file was set.
 * The path can be changed , so any page in the root directory can read the cookie by adding the string ; path=/:
 * document.cookie = 'name=Batman; path=/'
 */
document.cookie = 'name=Batman; path=/'

//setting the domain:
document.cookie = 'name=Batman; domain=sitepoint.com';

/**Secure Cookies
 * adding ; secure to the ende of a cookie will ensure it'sonly transmitted over a secure HTTPS network:
 * document.cookie = 'name=Batman; secure';
 */
document.cookie = 'name=Batman; secure';

/**Deleting Cookies
 * it need to set it to expire at a time in the past:
 * document.cookie = 'name=Batman; expires=Thu, 01 Jan 1970 00:00:01 GMT';
 */

/**Timing Functions:
 * --setTimeout()
 * -window on=bject provides soe useful methods for scheduling the execution of a function:
 * -the window.setTimeout() method accepts a callback to a function as its first parameter and a number of millisenconds as its second parameter,
 * --setInterval()
 * -the window-setInterval() method works in a similar way, except that it will repeatdly invoke the callback function after every givien nunber of millisecons:
 * -the window.clearInterval() method
 */
//display an alert dialog after three seconds
window.setTimeout(() => alert("Time's Up!"), 3000);

//cancel the timeout using window.clearTimeout()method:
window.setTimeout(() => alert("Time's Up!"), 3000);

window.clearTimeout(5);

function chant() { console.log('Beetlejuice'); } //anonymous function
const summon = window.setInterval(chant, 1000);

window.clearInterval(summon);

/**Animation
 * setTimeout and setInterval methods can be used to animate elements on a web page
 *-Lets create a web page that shows a colored squared and make it rotate 

  Create a folder called animation that contains files called index.html, 
  styles.css and main.js. Place the following code inside index.html:
 */

/**--requestAnimationFRame
 * -window object works in much the same way as the windowsetInerval()method
 */