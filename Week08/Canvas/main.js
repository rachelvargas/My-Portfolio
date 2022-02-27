//draw a rectangle with a red border:
var canvas = document.getElementById('mycanvas');
var context = canvas.getContext('2d');
context.strokeStyle = 'red';

//draw a recangle with a red border and blue fill:
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
context.strokeStyle = 'red';
context.fillStyle = 'blue';

//changethe blue fill to blue with a 50% opacity:var canvas = document.getElementById("myCanvas");     
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";

/**Drawing a REctangle to the Canvas
 * fillRect and strokeREct methods, take the X and Y coordinates where we want to begin drawing the fill or the stroke, and the 
 * width and height of the rectangle
 */
//add the stroke and fill 10 pixels from the top and 10 pixels from the left of the canva's top-left corner:
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

/**The Canvas Coordinate System
 * in the canvas coordinate system:
 * the top-left corner is (0,0)
 * if the canvas is 200 pixels by 200 pixwla , then the bottom-right corner is (200,200)
 */

/**Variation on fillStyle:
 * CanvasGradient and CanvasPattern
 * create a canvasPatter 
 */
/** create a canvasPatter by calling the createpattern method which take two parameters:
 * the image to create the pattern with, aand
 * how that image should be repeated. The repeat value is a string, and the valid values are
 * the same as those in CSS:repeat, repeat-x, repeat-y, and no-repeat.
 *  
 */
//creating a pattern 
function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";

    var img = new Image();
    img.src = "../images/bg-bike.png";


}
//create a pattern that use the image's onload property once the image has been fully loadedby the browser:
function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";

    var img = new Image();
    img.src = "../images/bg-bike.png";
}

//setting the src attribute, use the image's onload property to create our pattern once the image has been fully loaded by the browser:
function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";

    var img = new Image();
    img.src = "../images/bg-bike.png";
    img.onload = function() {};
}

/**In our onload event handler, we call createPattern, passing it the Image object 
 * and the string repeat so that our image repeats along both the X and Y axes. 
 * We store the results of createPattern in the variable pattern, and set the 
 * fillStyle to that variable:

Copy
 */
function drawPattern() {
    var img = new Image();
    img.src = "../images/bg-bike.png";
    img.onload = function() {
        var pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;
        context.fillRect(10, 10, 100, 100);
        context.strokeRect(10, 10, 100, 100);
    };
}

/**anoympus Functions
 * are like regular functions except, they are without names.
 * the code inside anonympus function will be run when the load event is fired */
/**create CanvasGradient 
 * to create a canvas gradient:
 * -call one of two methods: 
 * -createLinearGRadient() or
 * -createRAdialGRadient,
 * then add one or more color stopss to the gradient
 * createLinearGradient's x0 and y0, represent startin location of the gradient and
 * x1 and y1 represent the ending location
 */
//cratea gradient in the third canvas element that begins at the top of the canvas and blends
//the coloe down to the bottom:
//-starting point at theorigin(0,0),
//-ending point 200 px down from there(0,200)
function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200);
}

/**-addColorStop method, specify the color stops.
 * -offset is a value between 0(is at the start of the gradient) and 1(is at the end of the gradient):
 * -color, is a string value that can be a color name, a hexadecimal color value and an rgb() value, or an rgba() value:
 */
function drawGradient() {
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "white");
    context.fillStyle = gradient;
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100);
}

/**Drawing Other Shapes by Creating Paths:
 * -paths, create a blueprint for our lines, arcs, and shapes, but
 * are invisible until you give them a stroke
 */