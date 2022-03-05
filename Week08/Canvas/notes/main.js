//draw a rectangle with a red border:
var canvas = document.getElementById('mycanvas');
var context = canvas.getContext('2d');
context.strokeStyle = 'red';

//draw a recangle with a red border and blue fill:
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
context.strokeStyle = 'red';
context.fillStyle = 'blue';

//change the blue fill to blue with a 50% opacity:var canvas = document.getElementById("myCanvas");     
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
//draw a circle on the fourth canvas element at
function drawCircle(canvas) {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI * 2, true);
}

/*arc is a segment of a cirlce*/

/**Radians Explained
 * Radians are unit used to measure angles, and the symbol pi denotes a measurement in radians
 * 
 */

/**Saving Canvas Drawings
 * -toDataURL method , creates a URL with the image in it, we can right- the imaage at this URL, and save it as PNG or jpeg
 */

/**Drawing an Image to the Canvas:
 * -add an img element to the canvas.html
 */

/**Manipulating Images
 * getImageData method help us to manipulate the pixels of the image from the Canvas API,
 * also will return ImageData obectj,and allows us to examine a small section of canvas. It takes four parameters corres[onding to the
 * four corneres of a rectangle piece of the canvas]
 * ImageData object, conatins three properties:
 * -widht, height, and data.
 * -data, conatins information about the pixels in the ImageData object in the form of an array.
 */

/**Converting an Image from Color to Black and White:
 * -create a new function 
 * use for loop to iterate through each ixel in the mage and 
 * -change it to grayscale
 */

/**Manipulating Video with Canvas
 * videoToBW.js,
 */

/**Displaying Text on the Canvas
 * videoToBW.js,
 */

/**SVG - Scale Vector Graphics-
 * a specific file format that allows us to describe vector graphics using XML
 * -XML - eXtensible Markup Language, it is a system meant to annotate text.It tags are used to 
 * decribe data, such as the content of a file
 */

/**Drawing in SVG:
 * -viewBox attribute defines the starting location, width, and height of the SVG image
 * -circle element defines a circle with cx and cy the X and Y coordinates of the center of the circle.
 * -r the radius is represented with
 * -fill defines the fill style
 * -<desc> tag allows us to provide a description for the image we're going to draw
 * <rect> t
 */
//drawing a circle:
/*<svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 400 400" >
    <circle cx = "50" cy = "50" r = "25" fill = "red" / >
    </svg>*/

//drawing arectangle:
/**<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 400 400">
    <desc>Drawing a rectangle</desc>
    <rect x="10" y="10" width="100" height="100"  
            fill="blue" stroke="red" stroke-width="3"  />  
</svg> */

/**More complex SVG:
 * <svg xmlns="http://www.w3.org/2000/svg"    
    width="122.88545" height="114.88568">
<g
    inkscape:label="Calque 1"
    inkscape:groupmode="layer"
    id="layer1"
    transform="translate(-242.42282,-449.03699)">
    <g
    transform="matrix(0.72428496,0,0,0.72428496,119.87078,183.8127)"
    id="g7153">
    <path
        style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width
↵:2.761343;stroke-linecap:round;stroke-linejoin:round;stroke-miterl
↵imit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0"
        d="m 249.28667,389.00422 -9.7738,30.15957 -31.91999,7.5995 c -
↵2.74681,1.46591 -5.51239,2.92436 -1.69852,6.99979 l 30.15935,12.57
↵796 -11.80876,32.07362 c -1.56949,4.62283 -0.21957,6.36158 4.24212
↵,3.35419 l 26.59198,-24.55691 30.9576,17.75909 c 3.83318,2.65893 6
↵.12086,0.80055 5.36349,-3.57143 l -12.10702,-34.11764 22.72561,-13
↵.7066 c 2.32805,-1.03398 5.8555,-6.16054 -0.46651,-6.46042 l -33.5
↵0135,-0.66887 -11.69597,-27.26175 c -2.04282,-3.50583 -4.06602,-7.
↵22748 -7.06823,-0.1801 z"
        id="path7155"
        inkscape:connector-curvature="0"
        sodipodi:nodetypes="cccccccccccccccc" />
…
 */

/**Drawing an Image to Raphaël’s Container */

//add a div to our main index file.give to the div the ID spinner:
//canvas.html

/**The DAta Transfer Object 
 * are one type of object outlinec in the DRag and Drop API. 
 * allows us to set and get data about the elements that are being dragged.
 * -it let us difine two pieces of information:
 * the type of data we’re saving of the draggable element and 
 * the value of the data itself
 */

/**Accepting Dropped Elements
 * first, we need to create two more events:
 * -dragover, fires when we drag an item over an element, and
 * -drop, fires when er drop an item on it
 * we need to prevent the default behavior for both these events, since default prohibits us from dropping an element
 * canvas.html
 */