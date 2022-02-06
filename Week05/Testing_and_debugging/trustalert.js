/*function amIOldEnough(age){
    if (age = 12) {
        alert(age);
        return 'No, sorry.';
    } else if (age < 18) {
        return 'Only if you are accompanied by an adult.';
    }
    else {
        return 'Yep, come on in!';
    }
}
amIOldEnough(21)*/

//we want to return the message 'No, sorry.' for all values of age that are less than 12,
// so we could update the code to the following:
function amIOldEnough(age){
    if (age < 12) {
        alert(age);
        return 'No, sorry.';
    } else if (age < 18) {
        return 'Only if you are accompanied by an adult.';
    }
    else {
        return 'Yep, come on in!';
    }
}
amIOldEnough(21)