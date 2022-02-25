//functions
function Square(a) {
    return a * a;
}
Square.length




function sayHello() {
    return `Hello, my name is ${ this.name }`;
}

//objects with name property, 
//call method to invoke the sayHello function
//each object as an argument which will take the value of this in the function
//
const rachel = {
    name: 'Rachel'
};
const nicole = {
    name: 'Nicole'
};
sayHello.call(rachel);
sayHello.call(nicole);

//called function requires any parameters, need to be provide as argument
//after the first argument, which is always the value of this.
function sayHello(greeting = 'Hello') {
    return `${ greeting }, my name is ${ this.name }`;

}
sayHello.call(clark, 'How do you do');
sayHello.call(bruce);

//if a function doesn't refer to an object as this in its body. it can still be called 
//using the call() method, but you need provide null as its first argument.
//call the square function using the call() method 
Square.call(null, 7);

/**
 * apply()method the arguments of the function are provide as an array, even if 
 * there is only ane argument
 */
Square.apply(null, [7]);

//Custom Properties:
//description
Square.description = 'Squares a number that is provided as an argument'

//Memorisation
/**
 * If a function takes some time to compute a return value,
 *  we can save the result in a cache property
 * iIf the same argument is used again alter, 
 * we can return the value from the cache, rather than having to compute the result again.
 */
//Rewrite the square() function to save each result in a cache object that is a property of the function
function square(a) {
    square.cache = square.cache || {};
    if (!square.cache[a]) {
        square.cache[a] = a * a;
    }
    return square.cache[a]
}
//I we calle the function a few times,
//we can see that the cache on=bject stores the results:
square(5);
square(4);
square(-9);
square.cache;

/**Immediately Invoked Function Expressions - IIFE- (iffy):
 * Anonymomous function that is invoked as soon as it's defined
 * It is made into an expression by placing the whole declaration inside parentheses:
 */
(function() {
    const temp = 'Coding';
    console.log(`Hello ${temp}`);
})();

/**Temporary Variables
 * variable iside an IIFE that it's only available while the IIFE is invoked
 * then it will disappear
 */
//two global variables, x and y
//requiere to use a temporary variable, temp,  
//and only exists while the IIFE is invoked:
let x = 2;
let y = 5;
(() => {
    const temp = x;
    x = y;
    y = temp;
})();
x;
y;

//show the variable temp does not exist after the function has been invoked
console.log(temp);

/**Initialization Code
 * An IIFE will be invoked once, and can set up any vaviables, objects and event handlers
 * when the page loads
 */
//logs a welcome message to the console, then eliminates all the temporary variables used in putting the message together
(function() {
    const name = 'Rachel Vargas'; //this might be obtained from a cookie in reality
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(),
        today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
})();

//This code below will work as well as the code above
{
    const name = 'Rachel Vargas';
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
    const date = new Date(),
        today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
}


/**Safe Use of Strict Mode
 * Recommended way to use strict mode is to place all code inside an IIFE:
 */
(function() {
    'use strict';

    //all code inside this function 
})();

/**Creating Self-contained Code Blocks
 *Using IIFE , cde can be added or removed separately 
 */
//show two blocks X and Y , that are able to run code independently of each other
(function() {
    //block X
    const name = 'Block X';
    console.log(`Hello from ${name}`);
}());
(function() {
    const name = 'Block Y';
    console.log(`Hello from ${name}`);
}());

/**Functions that define and Rewrite Themselves
 * A function call, define and redifine itsel by assigning an anonymous 
 * function to a variable that has the same name as the function
 */
//log a message in the console,
//redifines itself to lo a different message in the console
function party() {
    console.log('Wow this is amazing!');
    party = function() {
        console.log('Been there, got the T-Shirt');
    }
}
//Every time the function is called after the first time, it will log the message 'Been there, got the T-Shirt':
party();

party();

party();

/**if the function is assigned to another variable, this variable will
 * maintain the original function definition and not be rewriteen because the original function is assigned to a variable 
 * then within the function, a variable with the same name as the function is assigned to a different fucntion
 */
function party() {
    console.log('Wow this is amazing!');
    party = function() {
        console.log('Been there, got the T-Shirt');
    }
}
const beach = party; //party function has not been invoked
beach(); // party() function has now been redefined, even though it hasn,t been called explicity
party();
beach(); //same
beach(); //same

/**Init-Time Branching
 * Fucntions thar rewrite themselves. Enable the functions to work more effectively
 * in the browser, and avoid checking for features every tome they're invoked.
 */
//define a fucntion based on whether certain methods are supported. so we only need to 
//check for support the first time the function is called:
function ride() {
    if (window.unicorn) {
        ride = function() {
            // some code that uses the brand new and sparkly unicorn methods
            return 'Riding on a unicorn is the best!';
        }
    } else {
        ride = function() {
            // some code that uses the older pony methods
            return 'Riding on a pony is still pretty good';
        }
    }
    return ride();
}
ride(); // the function rewrites itself, then calls itself

//check if the function has been rewitten by inspecting the function without invoking it
ride

/**Recursive Functions
 * Invoke itself until a certaing condition is met.
 * It is useful too to use when iterative processes are involved.
 */
//function that calculates the factoria of a number:
function factorial(number) {
    if (number === 0) {
        return 1;

    } else {
        return number * factorial(number - 1);
    }
}
factorial(4);

/*Callbacks
Event-driven Asynchronous Programming
*/
//simulate an operation that takes some time to happen
//function called wait() that acepts a callback
//use setTimeout()function to call the callback after a given number of seconds
function wait(message, callback, seconds) {
    setTimeout(callback, seconds * 1000);
    console.log(message);
}
//create a callback function to use:
function selfDestruct() {
    console.log('BOOOOM!');
}
//invoke the wait() function
//log a message to the console to
//see how JavaScript works asynchronously:
wait('This tape will self-destruct in ten seconds ..', selfDestruct, 10);
console.log('Hmmm, should I accept this mssion or not ...?');

/**Callback Hell
 * Refer to this tangled mess of code.
 */
/**A game that required the following task which are asynchronous, so
 * can be written as functions that use callbacks invoked once each task has been completed:
 
 1- the user logs in and a user object is returned
 2- the user ID is used to fetch player info from the server
 3- the game loads based on the player info*/
login(userName, function(error, user) {
    if (error) {
        throw error;
    } else {
        getPlayerInfo(user.id, function(error, info) {
            if (error) {
                throw error;
            } else {
                loadGame(info, function(error, game) {
                    if (error) {
                        throw error;
                    } else {
                        //code to run game
                    }
                });
            }
        });
    }
});

/**Promises
 * represents the future result of an asynchronous operation.
 * help simplyfy the process, and
 * avoid the convoluted code that can result from using multiple callbacks
 */

/**Creating a Promise
 * promise is created using a constructor function
 *it take a function called an executor as an argument
 * the executor initialzes the promise and starts the asynchronous operation
 * also accepts two functions as arguments:
 * resolve() function that is called if the operation is cuccessfull, and 
 * reject() function called if the operation fails.
 */
const promise = new Promise((resolve, reject) => {
    //initializacion code right here
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});
//promise that uses thedice object of chapter 5
const dice = {
        sides: 6,
        roll() {
            return Math.floor(this.sides * Math.random()) + 1;
        }
    }
    //promisethat use the dice.roll method as the asychronous operations and considersrolling 1 as a failure, and any other number as a success
const promise = new Promise((resolve, reject) => {
    const n = dice.roll();
    setTimeout(() => {
        (n > 1) ? resolve(n): reject(n);
    }, n * 1000);
});

/**Dealing With a Setled Promise
 * after a promise has been settled:
 * then()method is used to deal ith the outcome, accpts two arguments:
 * resolve(), a  fulfilment function that is calle when the promise is resolved
 * reject() a rejection function that is called if the promises is rejected
 */
promise.then(result =>
    console.log(`Yes! I rolled a ${result}`),
    result => console.log(`Drat! ... I rolled a${result}`));
//catch() method is used to specify whatto do if the operation fails instead
promise.catch(result => console.log(`Drat! ...  rolled a ${result}`));
//then() and catch() methodscan be chained together to form a succinct description of how to deal with the outcome of the promise
promise.then(result => console.log(`I rolled a ${result}`))
    .catch(result => console.log(`Drat! ... I rolled a ${result}`));


/**To try this code out, paste the following code into your
 *  browser console or use JS Bin with ES6/Babel enabled: */
/**const dice = {
sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

console.log('Before the roll');

const roll = new Promise( (resolve,reject) => {
    const n = dice.roll();
    if(n > 1){
        setTimeout(()=>{resolve(n)},n*200);
    } else {
        setTimeout(()=>reject(n),n*200);
    }
});

roll.then(result => console.log(`I rolled a ${result}`) )
.catch(result => console.log(`Drat! ... I rolled a ${result}`) );

console.log('After the roll');


/**Async Functions 
 * are preceded by the async keyword and 
 * allow you to write asynchronous code as if it was synchrnous
 * This is achievec by using the await operator before an asynchrinous function
 * it will wrap the return calue of the function in a promise that can then e assigned to a variable
 
*/
async function loadGame(userName) {

    try {
        const user = await login(userName);
        const info = await getPlayerInfo(user.id);
        //load the gae usinf the returned info
    } catch (error) {
        throw error;
    }
}
/**Generalized Functions
 * function that accepts a callback
 
 */
function random(a, b = 1) {
    //if only 1 argument is provided , we need to swap the values of a and b 
    if (b === 1) {
        [a, b] = [b, a];
    }
    return Math.floor((b - a + 1) * Math.random()) + a;
}
random(10);
random(15, 35);
//making the function more generic by addinga callback parameterfunction random(a,b,callback)

function random(a, b, callback) {
    if (b === undefined) b = a, a = 1; // if only one argument is supplied, assume the lower limit is 1
    const result = Math.floor((b - a + 1) * Math.random()) + a
    if (callback) {
        result = callback(result);
    }
    return result;
}
//Functions that return functions
//a function can accept anotherf unctions as argument andcan also return a function
function returnHello() {
    console.log('returnHello() called');
    return function() {
        console.log('Hellos World!');
    }
}
//to make use of the function that is returned,we need to assignit to a variable
const hello = returnHello();
// invoke the Hello World fucntion
hello()
    //more specificgreeting
function greeter(greeting = 'Hello') {
    return function() {
        console.log(greeting);
    }
}

const englishGreeter = greeter();
englishGreeter();

const frenchGreeter = greeter('Bonjour');
frenchGreeter();

const germanGreeter = greeter('Guten Tag');
germanGreeter();

/** Returning functions
 * a closure is formed when the inner function returned by the outer function, mainatining access to any variable dleclred inside the enclosing function
 *It is formed when a function returns another function that maintains access to any varibles created in the original's scope
 * */
function outer() {
    const outside = 'Outside!';

    function inner() {
        const inside = 'Inside!';
        console.log(outside);
        console.log(inside);
    }
    return inner;
}
//assing a vairable to the return value of the outer() function
const closure = outer();
closure();
/**create  two varibles(a,b) in the scope of the closure() function
 * returns an anonymous arrow function that maintains access to the a and b even after the closure fuction has been invoked
 * 
 */
function closure() {
    const a = 1.8;
    const b = 32;
    return c => c * a + b;
}
//create a new function by invoking the closure() function and assigning the return value to avariable called toFahrenheit
const toFahrenheit = closure();
toFahrenheit(50);

//counter example
function counter(start) {
    let i = start;
    return function() {
        return i++;
    }
}
const count = counter(1);
count();
count();
/**Generators
 * are special funtions used to produce iterators that maintain the state of a value
 * to define a generator function, an asterisk symbol * is placed after the function declaration:
 */
function* exampleGenerator() {
        //code for the generator heere
    }
    //createa generator to produce a Fibonacci-style number series:
    //a sequence that start with two numbers and the next one is obtained bya adding the 2 previous numbers together
function* fibonacci(a, b) {
    let [prev, current] = [a, b];
    while (true) {
        [prev, current] = [current, prev + current];
        yield current;
    }
}
const sequence = fibonacci(1, 1);
sequence.next();
sequence.next();
//iterate oner the generator to invoke it multiple times:
for (n of sequence) {
    // stop the sequence after it reaches 100
    if (n > 10) break;
    console.log(n);
}
/**Functional programming
 * are the fundamental elements that Javascript excels, as:
 *the ability to pass functions as arguments,
 * return those functions from another functions, and
 * use anonymous functions and closures
 * Also, functioal programming is a programming paradigm as:
 * object orientedprogramming, and procedural programming.
 * Javascript is a multi-paradigm language, so it can be used to program in a variety of paradigms*/

/**Pure functions
 * is a function that adheres to the following rules:
 * 1- the return value should only depend on the values provided as arguments.
 * 2- there are no side-effects. Doesn't shange any values or data elsewhere in the program
 * 3- referential transparency. given the same arguments, it alwasy return the same result.
 * So, any pure function must have:
 * 1- at least one argument, 
 * 2- a return value
 * Pure functions, help to make functional programming code more concise and predictable that in other programming styles.
 * Referetial transparency makes them easy to test 
 * Any return values can be cached, since they are alwaysthe same
 * The absence of any side-effects tend to reduce the amounts of bugs 
 */
function reverse(string) {
    return string.split('').reverse().join('');
}
//the function doesn't change the actual value of the argument,it jsut return another string thathappens to be the argument written backwards
const message = 'Hello Javascript';
reverse(message);
message
/**const to declare a variable will help to avoid destructive data transformations because
 * any varriables with const cannot be changed 
 */
const number = 50;

function pureAdd(x, y) {
    return x + y;
}
result = pureAdd(number, 20)
    //more examples
    //hypotenusa functiona and square function

function square(x) {
    return x * x;
}

function hypotenuse(a, b) {
    return Math.sqrt(square(a) + square(b));
}

hypotenuse(3, 4);
//with callback
function sum(array, callback) {
    if (callback) {
        array = array.map(callback);
    }
    return array.reduce((a, b) => a + b);
}
sum([5, 3, 9]);
//find the sum aftere the numbers have been squared
sum([5, 3, 9], square); //5 ^ 3 + 3^3 + 9^3

//the sum() function can also be used tocreated a mean() function that calculates the mean of an array of number:
function mean(array) {
    return sum(array) / array.length;
}

mean([1, 2, 3]);
//variance calculation of an array numbers, the measure of spread that measures deviation from the mean,
function variance(array) {
    return sum(array, square) / array.length - square(mean(array))
}

variance([1, 2, 3])
    /**Higher -ORder Functions
     * accept another funtions as and argument, or 
     * return another functions as a result or both
     */
    //by creatina closure around a functions's arguments that keeps them'alive' in a return function
function multiplier(x) { //higher-order fucntion
    return function(y) {
        return x * y;
    }
}
doubler = multiplier(2);
doubler(10);
//higher-order function is build other more specific functions by using different arguments.tripler = multiplier(3);

tripler(10);
//more examples of higher order function
function power(x) {
    return function(power) {
        return Math.pow(x, power);
    }
}
//and more specific functiontwoExp = power(2);
twoExp = power(2);
twoExp(5);
//creatinganother function that returns power of20
tenExp = power(20);

tenExp(6);
//calculting 3 to the power of5
power(3)(5);

/**Currying
 * is a process that involves the partial applications of fucntions
 * ocure when ot all arguments have been supplied to the fucntion, so it returns
 * another function that retains the arguments already provided, and
 * expects the remaining arguments that were omitted when the original fucntion was called
 * Afinal result is only returned once all the expected arguments have eventually een provided
 * currying allows us to turn a single fucntion into a series of functions instead. 
 * it is useful when we are frecuenttely calling a function with the same argument.
 * 
 */
function multiplier(x, y) {
    return x * y;
}
const tax = multiplier(0.22, 400);
//making this fucntion more usefull by curried, so returns another functions if only one argument is privided:
function multiplier(x, y) {
    if (y === undefined) {
        return function(z) {
            return x * z;
        }
    } else {
        return x * y;
    }
}
calcTax = multiplier(0.22);
calcTax(400);
// A general Curry Function
function curry(func, ...oldArgs) {
    return function(...newArgs) {
        const allArgs = [...oldArgs, ...newArgs];
        return func(...allArgs);
    }
}
const divider = (x, y) => x / y;
divider(30, 6);
//more specific function
const reciprocal = curry(divider, 1);
reciprocal(8);
/**Getting Functional
 * 
 */