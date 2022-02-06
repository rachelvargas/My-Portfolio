/*function amIOldEnough(age){
    console.log(age);
        if (age < 12) {
        console.log(`In the if with ${age}`);
        return 'No, sorry.';
        } else if (age < 18) {
        console.log(`In the else-if with ${age}`);
        return 'Only if you are accompanied by an adult.';
        } else {
        console.log(`In the else with ${age}`);
        return 'Yep, come on in!';
    }
}
amIOldEnough(20);*/

//debugging tools
/*function amIOldEnough(age){
    debugger;
        if (age < 12) {
        debugger;
        return 'No, sorry.';
        } else if (age < 18) {
        debugger;
        return 'Only if you are accompanied by an adult.';
        } else {
        debugger;
        return 'Yep, come on in!';
    }
}

amIOldEnough(16);*/

// write a function called squareRoot() to find the square root of a number. 
/*function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError("You can't find the square root of negative numbers")
    }
    return Math.sqrt(number);
};
squareRoot(121);
*/

//squareRoot(-1);

//try, catch and finally blocks
/*function imaginarySquareRoot(number) {
    'use strict';
    try {
        return String(squareRoot(number));
    } catch(error) {
        return squareRoot(-number)+'i';
    }
}*/
function imaginarySquareRoot(number) {
    'use strict';
    let answer;
    try {
        answer = String(squareRoot(number));
    } catch(error) {
        answer = squareRoot(-number)+"i";
    } finally {
        return `+ or - ${answer}`;
    }
}
imaginarySquareRoot(-49) // no error message shown

