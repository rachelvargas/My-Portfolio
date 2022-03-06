function makeVideoOldTimey() {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvasOverlay');
    var context = canvas.getContext('2d');

    /**Next, add a new event listener to react to the play event firing on the video element. 
     * call a custom function called draw when the video begins playing (we’ll review what happens in this custom function right after this code block). 
     * To do so, we’ll add an event listener to our video element that responds to the play event:
     */
    video.addEventListener('play', function() {
        draw(video, context, canvas);
    }, false);
}
/**Since we want to pass several parameters to the draw function— video, context, and 
 * canvas —we must call it from inside an anonymous function. draw function
 */
function draw(video, context, canvas) {
    if (video.paused || video.ended) return false;

    drawOneFrame(video, context, canvas);

    //start over
    setTimeout(function() {
        draw(video, context, canvas);
    }, 0)
}

//check if the video is paused or has ended curtin the function short by returning false
/*function drawOneFrame(video, context, canvas) {
    //draw the video onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    var pixelData = imageData.data;
    //loop through the red, gree and blue pixels, 
    //turning them grayscale

    var red, green, blue, greyscale;
    for (var i = 0; i < pixelData.length; i += 4) {
        red = pixelData[i];
        green = pixelData[i + 1];
        blue = pixelData[i + 2];
        //we'll ignore the alpha value, which is in position i+3

        greyscale = red * 0.5 + green * 0.70 + blue * 0.15;

        pixelData[i] = greyscale;
        pixelData[i + 1] = greyscale;
        pixelData[i + 2] = greyscale;
    }
    context.putImageData(imageData, 0, 0);
}*/

/**Displaying Text on the Canvas:*/
//- add ane error handling try/catch block to catch the error:
function drawOneFrame(video, context, canvas) {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    try {
        (review, code, style)
        var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        var pixelData = imageData.data;
        var red, green, blue, greyscale;
        for (var i = 0; i < pixelData.length; i += 4) {
            red = pixelData[i];
            green = pixelData[i + 1];
            blue = pixelData[i + 2];
            greyscale = red * 0.5 + green * 0.70 + blue * 0.15;
            pixelData[i] = greyscale;
            pixelData[i + 1] = greyscale;
            pixelData[i + 2] = greyscale;
        }
        context.putImageData(imageData, 0, 0);
    } catch (err) {
        //error handling
        context.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.backgroundcolor = "transparent";
        context.fillStyle = "white";
        context.textAlign = "left";

        canvas.width = canvas.width;


        //set a font size:
        context.font = "20px LeagueGothic, Tahoma, Geneva, sans-serif";

        //fillText method, draw the texst on canvas
        //write out a farly long message, by spliting it up into several sections, place each one on the canvas separately:
        context.fillText("There was an error rendering ", 10, 20);
        context.fillText("the video to the canvas.", 10, 40);
        context.fillText("Perhaps you are viewing this page from", 10, 70);

        context.fillText("a file on your computer?", 10, 90);
        context.fillText("Try viewing this page online instead", 10, 130);

        return false;



    }
}

/**Making Elements Draggable:
 * draggable="true"
 */
/**set an event listener for the dragstart event on each image.
 * beging using querySelectorAll to grab all the img elements whose parent element has the ID set to mouseConatainer
 * next loop thorought al the img elements contained in the mice variable, and add an event listener for the dragstart event on each computer mouse
 */

/**store the ID of our images so that we know which image is being dragged around
 * -telling Data Transfer that we want to save some plain text by passing in the string text/plain
 * then, give it the ID of our mouse image:
 */

/**lets drop handler:
 *  1- figure out what the cat should say when a mouse is dropped on it. 
 * 2- demonstrate that we can retrieve the ID of the dropped mouse from the DataTransfer object, 
 * 3- use a different phrase for each mouse, regardless of the order in which they’re dropped.
 *  We’ve given three cat-appropriate options: “MEOW!”, “Purrr ...”, and “NOMNOMNOM.”
 * 4-  store these options inside an object called mouseHash,
 */

//declare our object,
//store key/value pairs inside them, 
//store each response in the mouseHash object, 
//associating each response with the ID of one of the mouse images:
// grab the h2 element that we’ll change to reflect the cat’s response:
// retrieve the ID by writing another method called getData:

var mice = document.querySelectorAll("#mouseContainer img");
var mouse = null;
for (var i = 0; i < mice.length; i++) {
    mouse = mice[i];
    mouse.addEventListener('dragstart', function(event) {
        // handle the dragstart event
        event.dataTransfer.setData("text/plain", this.id);
        
        //handle the dragover event:
        var cat = document.getElementById('cat');
        cat.addEventListener("dragover", function(event) {
            event.preventDefault();
        cat.addEventListener("drop", function(event) {
        var mouseHash = {
            mause1: 'NOMNOMNOM',
            mouse2: 'Meow',
            mouse3: 'Purrrrrr ...'
        }
var catHeading = document.getElementById('catHeading');
var mouseID = event.originalEvent.dataTransfer.getData("text/plain");

//change the text to the appropriate response:
catHeading.innerHTML = mouseHash[mouseID];

//Given that the mouse has now been “eaten,” 
//it makes sense to remove it from the page:
var mousey = document.getElementById(item);
mousey.parentNode.removeChild(mousey);

//prevent the default behavior of not allowing elements to be
//dropped on our cat image, as we did before:
event.preventDefault();
});
       
 }
     
