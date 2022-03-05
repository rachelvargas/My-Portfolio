// receives a reference to our square div, then sets a variable called angle to 0
/*const squareElement = document.getElementById('square');
let angle = 0;*/

/**use the setInterval() method to increase the value of angle by 2 (we also use the % operator so that it resets to 0 at 360),
 *  then set the transform CSS3 property to rotate that number of degrees.
 *  The second argument is 1000/60, which equates to a 
 * frame speed of 60 frames per second. */
/*setInterval(() => {
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`
}, 1000 / 60);*/

//Change the code in main.js to the following:
const squareElement = document.getElementById('square');
let angle = 0;

function rotate() {
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);
cancelAnimationFrame(id);

/**o start the animation, we need to call the requestAnimationFrame() method,
 *  giving the rotate() function as an argument. This will return a unique ID 
 * that can be employed to stop the animation using the window.cancelAnimationFrame()
 *  method: 
 * cancelAnimationFrame(id);*/