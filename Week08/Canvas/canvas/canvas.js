//grab hold of the canvas element
//var canvas = document.getElementById('myCanvas');

//draw a rectangle with a red border:
/*var canvas = document.getElementById('mycanvas');
var context = canvas.getContext('2d');
context.strokeStyle = 'red';*/

//draw a recangle with a red border and blue fill:
/*var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
context.strokeStyle = 'red';
context.fillStyle = 'blue';*/

//change the blue fill to blue with a 50% opacity:
/*var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";*/

//add the stroke and fill 10 pixels from the top and 10 pixels from the left of the canva's top-left corner:
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

//creating a pattern 
/*function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";

    var img = new Image();
    img.src = "../images/bg-bike.png";


}*/

//create a pattern that use the image's onload property once the image has been fully loadedby the browser:
/*function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";

    var img = new Image();
    img.src = "../images/bg-bike.png";
}*/

//setting the src attribute, use the image's onload property to create our pattern once the image has been fully loaded by the browser:
/*function drawPattern() {
var canvas = document.getElementById("demo2");
var context = canvas.getContext("2d");
context.strokeStyle = "red";

var img = new Image();
img.src = "../images/bg-bike.png";
img.onload = function() {};
}*/

/**In our onload event handler, we call createPattern, passing it the Image object 
 * and the string repeat so that our image repeats along both the X and Y axes. 
 * We store the results of createPattern in the variable pattern, and set the 
 * fillStyle to that variable:*/
function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var img = new Image();
    img.src = "../images/bg-bike.png";
    img.onload = function() {
        var pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;
        context.fillRect(10, 10, 100, 100);
        context.strokeRect(10, 10, 100, 100);
    };
}

//cratea gradient in the third canvas element that begins at the top of the canvas and blends
//the coloe down to the bottom:
//-starting point at theorigin(0,0),
//-ending point 200 px down from there(0,200)
/*function drawGradient() {  //ojo
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    //var gradient = context.createLinearGradient(0, 0, 0, 200);
}*/

/**-addColorStop method, specify the color stops.
 * -offset is a value between 0(is at the start of the gradient) and 1(is at the end of the gradient):
 * -color, is a string value that can be a color name, a hexadecimal color value and an rgb() value, or an rgba() value:
 */
function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "white");
    context.fillStyle = gradient;
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100);
}

//draw a circle on the fourth canvas element
/*function drawCircle(canvas) {
    var context = canvas.getContext('2d');
    context.beginPath();
}*/

//draw a 360º arc using the arc method
/*function drawCircle(canvas) {
    var canvas = document.getElementById('mycanvas');
    var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI * 2, true); //arc(x,y radius, startAngle, endAngle, anticlockwise)
}*/
//finish drawing the circle by closing the path
/*function drawCircle(canvas) {
    var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI * 2, true);
    context.closePath();
}*/
//make our border a bit bigger by setting the lineWidth to 3:
/*function drawCircle(canvas) {
    var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI * 2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
}*/

//fill a path simply calling fill, and to stroke it you call stroke:
function drawCircle(canvas) {
    var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI * 2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill();
    context.stroke();
}

/**define a new JAvaSript function called saveDrawing that open the canvas
 drwing as an imae in a new tab by clicking the button*/
function saveDrawing() {
    var canvas5 = document.getElementById('demo5');
    window.open(canvas5.toDataURL('image/png'));
}

/* add code to call our saveDrawing function when the Save button is clicked:*/
var button = document.getElementById('saveButton');
button.addEventListener('click', saveDrawing, false);

/** to ensure that the img has loaded when attempt to redraw  the html img on the page,
 * add an event listener that run the code only once the windows' load event has fired */
window.addEventListener("load", drawImageToCanvas, false);

/**Now create the drawImageToCanvas function in order to redraw the HTML img element onto the canvas. */
function drawImageToCanvas() {
    var canvas = document.getElementById('demo6');
    var context = canvas.getContext("2d");
    var image = document.getElementById('myImageElem');
    //use canvas’s drawImage method to redraw the image from our page into the canvas:
    //context.drawImage(image, 0, 0);
    //now draw the image at the center of the canvas, by changing the X and /y coordinates 
    context.drawImage(image, 68, 68);
    //call getImageData on very small section of the canvas, 
    var imageData = context.getImageData(0, 0, 1, 1);
    var pixelData = imageData.data;
    console.log(pixelData.length);

}

/**to converta full color imageinto black and white:
 * - create  function called manipulateImage
 * -use for loop to iterate through each ixel in the mage and 
 * -change it to grayscale
 */
//call getImageData(0, 0, 200, 200) toretrieve the entire canvas
function manipulateImage() {
    var canvas = document.getElementById('demo7');
    var context = canvas.getContext("2d");
    var image = document.getElementById('secondImage');
    context.drawImage(image, 68, 68);

    var imageData = context.getImageData(0, 0, 200, 200);

    var red, green, blue, grayscale;

    for (var i = 0; i < imageData.data.length; i += 4) {
        red = imageData.data[i];
        green = imageData.data[i + 1];
        blue = imageData.data[i + 2];
        //now, determine the grayscale value for the current pixel.by multiplying each of the 
        //red, gree, and blue values by some specific numbers:
        grayscale = red * 0.5 + green * 0.80 + blue * 0.17;

        //then, store it back into the red, green, and blue values in the data array
        imageData.data[i] = grayscale;
        imageData.data[i + 1] = grayscale;
        imageData.data[i + 2] = grayscale;
    }
    //Putting the image data we've modified back into the canvas via a method called putImageData
    //to take the image data and write it onto the canvas
    context.putImageData(imageData, 0, 0);

}