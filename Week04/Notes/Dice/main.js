/*function that defines the properties and methods 
of an object. Here is the dice example rewritten as a constructor function:*/
const Dice = function(sides=6){
    this.sides = sides;
    this.roll = function() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

//an instance of the dice constructor function using the new operator.
const redDice = new Dice();

// create another Dice object with four sides, 
const whiteDice = new Dice(4);

//returns an object that was assigned to the variable redDice, which is said to be an instance of the Dice constructor function
redDice instanceof Dice

//redDice will have a sides property and roll() method
redDice.sides
redDice.roll()


//ES6 Class Declarations
class Dice {
    constructor(sides=6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

//an instance of the Dice class, the new operator is again used:
const blueDice = new Dice(20);

// redDice object:
blueDice instanceof Dice

blueDice.sides

blueDice.roll()

//All objects have a constructor property that returns the constructor function that created it:
blueDice.constructor

//n object literal is used to create a new object
const literalObject = {};
literalObject.constructor

/*
 another copy of the redDice object, but if the
  name of its constructor was unknown, we could use the following:*/
const greenDice = new redDice.constructor(10);
//greenDice instanceOf Dice

/**
 * A static method is called by the class directly 
 * rather than by instances of the class.
For example, the Dice class could have a method*/
class Dice {
    constructor(sides=6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }

    static description() {
        return 'A way of choosing random numbers'
    }
}
Dice.description()

//create a class for creating ninja turtles:
class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
}

//This can then be used to create a new turtle instance:
const leo = new Turtle('Leonardo');
/*const rafael = new Turtle( 'Raphael');
const michel  = new  Turtle('Michaelangelo');*/

//It has a name property and a sayHi() method that references the name property:
leo.name;
leo.sayHi();

//The Prototype Property
Turtle.prototype;
Turtle.prototype.weapon = 'Hands';

//We can also add a method to the prototype in a similar way:
Turtle.prototype.attack = function(){
return `Feel the power of my ${this.weapon}!`;
}

//Finding Out the Prototype
//One way is to go via the constructor function’s prototype property:
raph.constructor.prototype;

//Another way is to use the Object.getPrototypeOf() method, which takes the object as a parameter:
Object.getPrototypeOf(raph);

/**
 * the raph object has a weapon property and attack() method that 
 * are inherited from Turtle.prototype. But the leo object that was created before we 
 * added these to the prototype will also have access to them:*/
leo.weapon

leo.attack();

//change the value of the prototype’s weapon property, this will be reflected in all instances of the Turtle class:
Turtle.prototype.weapon = 'Feet';
leo.attack();
raph.attack();
don.attack();

/**
 * Overwriting Prototype Properties
 overwrite any properties or methods inherited
 from its prototype by simply assigning a new value to them. */
leo.weapon = 'Katana Blades';
raph.weapon = 'Sai';
don.weapon = 'Bo Staff';

// include a private _color property (some of the other properties and methods have also been removed for clarity):
class Turtle {
    constructor(name,color) {
        this.name = name;
        let _color = color;
        this.setColor = color => { return _color = color; }
        this.getColor = () => _color;
    }
}

//could insist that the color property is a string:
this.setColor = (color) => {
if(typeof color === 'string'){
    return _color = color;
    } else {
        throw new Error('Color must be a string');
    }
}

raph.setColor(4);

//The Prototype Chain
Object.getPrototypeOf(raph)

//Enumerable Properties
// all properties and methods that are created by assignment are enumerable):
Turtle.prototype.propertyIsEnumerable('eat');

//the propertyIsEnumerable() method can be used to show that it isn’t, itself, enumerable:
Object.prototype.propertyIsEnumerable('propertyIsEnumerable');

//nheritance Using extends
class Turtle {
    constructor(name) {
        this.name = name;
        }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }

    swim() {
        return `${this.name} paddles in the water`;
    }
}
class NinjaTurtle extends Turtle {
    constructor(name) {
        super(name);
        this.weapon = 'hands';
    }
    attack() { return `Feel the power of my ${this.weapon}!` } 
}

//Adding Methods to Built-in Objects
Number.prototype.isEven = function() {
    return this%2 === 0;
}

Number.prototype.isOdd = function() {
    return this%2 === 1;
}

//add a first() and last() methods that return the first and last items in the array:
Array.prototype.first = function() {
    return this[0];
}

Array.prototype.last = function() {
    return this[this.length -1];
}

//check that these work with a couple of examples:
const turtles = ['Leonardo', 'Donatello', 'Michaelangelo', 'Raphael'];

turtles.first();

turtles.last();

/*create a new method called delete() 
 removes an item from the array at the index provided:*/
Array.prototype.delete = function(i) {
    return self.splice(i,1);
}

//create your own array class by extending the built in array class, like so:
class myArray extends Array {
    constructor(...args){
        super(...args);
    }
    delete(i) {
        return this.splice(i,1);
    }
}

//create one of your new array objects, use the new keyword:
const list = new myArray(1,2,3);

//check that our delete() method works:
list.delete(1);

list

//Property Attributes and Descriptors
//Getting and Setting Property Descriptors
/*Object.getOwnPropertyDescriptor(me,'name');
writable: true,
enumerable: true,
configurable: true }*/
//getter and setter
me.age = 21;
me.retirementAge = 65;

Object.defineProperty(me, 'yearsToRetirement',{
    get() {
        if(this.age > this.retirementAge) { return 0; }
        else { return this.retirementAge - this.age; }
    },
    set(value) {
        this.age = this.retirementAge - value;
        return value;
    }
});