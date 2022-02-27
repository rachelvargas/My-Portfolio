/**CSS3 Transorms and Transitions
 *Transform:
 transform property let us translate, rotate, scale, and/or skew element on the page.
 Its value is one or more transform functions that will be applied on the order thy're provided
 *Translation:
 translation functions allow to move elements left, right, up or down.
 Are similar to the behavior of position:relative; when ceclaring top and left, moving elements
 up and down of left and right aling the x and y axes. 
 */
//translate(x,y)function moves an elementx from the left, and y from the top:
//transform: translate(45px, -45px);

//to move an element vertically or horizontally,use the translatex or translatey functions respectively.
//move 45px to the right aling thex axis:
//transform: translateX(45 px);

//move up along they axis by 30px:
//transform: TransformStreamDefaultController(-30 px);

//move the word 'dukes' over to the right when the user hovers over it:
//<h1 > Put your < span > dukes < /span> up, sire</h1>

//applythe style whenever the user hovers over the h1.
/**.ad-ad2 h1:hover span{
 * color: #484848;
 * transform: translate(40px);
 * } */

/**Scaling:
 * the scale(x,y) function scales an element by the defined factors horizontally then vertically
 * If only one value is provided, it will be used for boththe x and y values,
 * growing or shrinking your element or pseudo-element while maintaining the original aspect ratio.
 * scale(x) and sclae(y) functions will scale only the horizontal or only the vertical dimensions respectively.
 * to delcare multiple transformations, we need to add a scale to the end of the space-sparated  list.
 * Also, if we scale inline-block elements, text around it will fail to accommodate it with reflowing.
 * If so , we need to adjust height, width, or font-size instead of using scale() transform
 */
//transform: scale(1.5, 0.25);

//add a scale transform to the span
/**.ad-ad2 h1:hover span {
    color: #484848;  
    transform: translateX(40px) scale(1.5);
} */

/**Rotation:
 * rotate() function rotates an element around the point of origin by a specified angle value.
 * generally, angles are declared in degrees, with positve(clockwise) and negative(counterclockwise)
 */
// add a rotate transform to the'dukes':
/** .ad-ad2 h1:hover span {
    color: #484848;
    transform: rotate(10deg) translateX(40px) scale(1.5);
}*/
/**Changing the Origin of the Transform
 * transform-origin, default to the center of the object, so scales and rotations will be around the center of the box by default
 * 
 */
//transform-origin: 0 0;

/**Support for Internet Explorer 8 and Earlier
 * .translate {
    position: relative;
    top: 200px;
    left: 200px;
}

.rotate {
    transform: rotate(15deg);  
    filter: progid:DXImageTransform.Microsoft.Matrix(
        sizingMethod='auto expand', M11=0.9659258262890683, 
        M12=-0.25881904510252074, M21=0.25881904510252074, 
        M22=0.9659258262890683); 
    -ms-filter: "progid:DXImageTransform.Microsoft.Matrix(
        M11=0.9659258262890683, M12=-0.25881904510252074, 
        M21=0.25881904510252074, M22=0.9659258262890683,
        sizingMethod='auto expand')"; 
    zoom: 1;
}
 */

/**Transitions
 * allow the values of CSS prperties to change over time, essentially providing simple animations.
 * with CSS transition property the color tansition ca be gradual.
 *
 */
/**steps to create a simple transition using only CSS:
* 1- Declare the original state of the element in the default style declaration.

* 2- Declare the final state of your transitioned element; for example, a :hover state.

* 3- Include the transition functions in your default style declaration using the 
transition properties, including: transition-property, transition-duration, 
transition-timing-function, and transition-delay. We’ll look at each of these
 and how they work shortly.
 transition-property, property defines the CSs properties of the element that shoud be transitioned,
 with all for  all properties as default
 */
//applythe transition to the transform property:
/**.ad-ad2 h1 span {
    transition-property: transform;
} */

/**Supporting Older Browsers
 * to support older browsers , we need to include the-webkit- prefix  for all of the transition properties:
 * .ad-ad2 h1 span {
    -webkit-transition-property: -webkit-transform;
    transition-property: transform;
}
To transitio more that one property but not all, jusut comma-separate them:
//.foo {
    transition-property: transform, color;
}
 */

/**the ransition-duration Property
 * sets how long the transition will take,
 * it can be specify this either seconds, s, or milliseconds ms, 
 * //transition-duration: 0.2s;
 * 200ms, is considered the optimum time for transitions, slower make seem the webiste slow
 */

/**the transition-timing-function Property
 * lets us control the pace of the transition in even more granular detail.
 * The most common timing functions:
 * -ease,has a slow start, then speedsup, and slowly.
 * -linear, creates a transition that animates at a constant speed.
 * -ease-in, creates a transition that is slow to start but gain speed, then stops abruptly.
 * -ease-out, starts at full speed, then slows progressively as it reaches the conclusion of the transition:
 * (transition-timing-function: ease-out;)
 * -ease-in-out, accelerates more sharply at the beginning.
 * cubic-bezier fuction, accepts four numeric parameters to better difine the timming funtcion
 * )steps function defines the nuber of steps and the direction of either start or end, 
 */
/*The transition - delay property
 webkit-transition-delay: 50ms;
transition-delay: 50ms;*/

/**the transition Shorthand Property
 * //.ad-ad2 h1 span {
    transition: transform 0.2s ease-out 50ms;
}
//long transition:
.ad-ad2 h1 span {
    transition-property: transform; 
    transition-duration: 0.2s;  
    transition-timing-function: ease-out;
    transition-delay: 50ms;
}
 */

/**Multiple Transtions
 *transition-property: transform, color; 
    transition-duration: 0.2s;  
    transition-timing-function: ease-out;
    transition-delay: 50ms;

    transition-property: transform, color; 
transition-duration: 0.2s, 0.1s;  
transition-timing-function: ease-out, linear;
transition-delay: 50ms;

//shorrhand to spcify multiple transitions at different duration, delays, and timminf functions:
transition: transform 0.2s ease-out 50ms, color 0.1s linear 50ms;

//all keyword change both properties at the same time rate and delay
//use the all keyword, al the properties transition at the same rate, speed and delay:
//transition: all 0.2s ease-out 50ms;
 */

/**Animations
 * Keyframes:
 * to animate in CSS,
 * 1- create a named animation
 * 2- attach it to an element in that element's property declaration block
 * -@keyframes- or -@-webkit-eyframes- rule , create an aniation, 
 */
//animation exa:
/**@-webkit-keyframes myAnimation { 
// put animation keyframes here 
}
@keyframes myAnimation {
    // put animation keyframes here 
}*/

/**animations example:
 * @keyframes moveRight { 
    from {
    transform: translateX(-50%);
    }
    to {
    transform: translateX(50%);
    }
}

@keyframes appearDisappear { 
    0%, 100% {
    opacity: 0;
    }
    20%, 80% {
    opacity: 1;
    }
}

@keyframes bgMove {
    100% {
    background-position: 120% 0;
    }
}
 */

/**Animation Properties
 * //animation-name: appearDisappear;
 * 
 * animation-duration property, defines the lenght of time an animation takes to complete one itaration:
 * //animation-duration: 300ms;
 */

/**animation-timing-function
 * determines how the animation wil progress over its duration:
 * //animation-timing-function: linear;
 */
/**background-position
 * use the steps() function, to move the background image sprite through the sized background box in four steps
 * moe the background image to the left so that each image within the sprite is displayed in succession
 * .ad-ad3 :after {
    content: '';
    width: 90px;
    height: 92px;
    background-image: url(../images/bike_sprite.png);
    display: block;
    margin: auto;
}

@keyframes bike {
    0% {
    background-position: 0 0;
    }
    100% {
        background-position: -360px 0;
    }
}
//animation-timing-function: steps(4, end);
 */
/** animation-iteration-count property
 * lets us define how many times the aniamtion will play throug:
 * //animation-iteration-count: infinite;
 */

/**animation-direction
 * id the aniamtion-iteration-count is greater than 1, we can use animation-direction property to change the behavior
 * //animation-direction: alternate;
 */

/**animation-delay property
 * is used to define how many milliseconds to wait before the browser begins the animation:
 * //animation-delay: 50ms;
 * animation-fill-mode property, defines what happens before the first animation iteration begins and after the las anmiation
 * concludes.
 * the values are:
 * -none, forwards, backwards, or both
 * //animation-fill-mode: both;
 * animation-play-state property, defines whether the animation is running or paused
 */


/**The Shorthand animation Property
 *.verbose {
    animation-name: appearDisappear; 
    animation-duration: 300ms; 
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    animation-direction: alternate;
    animation-delay: 5s;
    animation-fill-mode: backwards;
    animation-play-state: running;
}

// *shorthand* 
/*.concise {
    animation: 300 ms ease - in alternate 5 s backwards appearDisappear;
} */

/**Warning:
 * to declare multiple animations on an element, include a grouping for each aniamtion name,
 * with each chrothand grouping separated by a comma:
 * .target {
    animation: 
    animationOne 300ms ease-in backwards, 
    animationTwo 600ms ease-out 1s forwards;
}
//use the steps() timing function to change the background image:
@keyframes bike {
    0% {
    background-position: 0 0;
    }
    100% {
    background-position: -360px 0;
    }
}
@keyframes move {
    0% {
    transform: translateX(-100px);
    }
    100% {
    transform: translateX(100px);
    }
}  
    
h1:after {
    content: '';
    width: 90px;
    height: 92px;
    background-image: url(../images/bike_sprite.png);
    display: block;
    margin: auto;
    animation: 
        0.4s steps(4, end) infinite 50ms bike,
        8s linear infinite 50ms move;
    animation-play-state: paused;
}
h1:hover:after {
    animation-play-state: running;
}
 */