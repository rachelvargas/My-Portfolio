//MDN examples
//Create an Array
let fruits = ['Apple', 'Banna'];
console.log(fruits.length)

//Access an Array item using the index position
let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana

//Loop over an Array
fruits.forEach(function(item, index, array) {
    console.log(item, index)
  })
  // Apple 0
  //Banana 1

//Add an item to the end of an Array
let newLength = fruits.push('Orange')

//Remove an item from the end of an Array

let last = fruits.pop() // remove Orange (from the end)

//Remove an item from the beginning of an Array

let first = fruits.shift() // remove Apple from the front

//Add an item to the beginning of an Array

let newLength = fruits.unshift('Strawberry') // add to the front

//Find the index of an item in the Array

fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana')

//Remove an item by index position

let removedItem = fruits.splice(pos, 1) // this is how to remove an item

//Remove items from an index position

let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems)
// ["Turnip", "Radish"]

//Copy an Array

let shallowCopySpread = [...fruits]
// ["Strawberry", "Mango"]

//Shallow copy using Array.slice():

let shallowCopySlice = fruits.slice()
// ["Strawberry", "Mango"]

//Shallow copy using Array.from():

let shallowCopyFrom = Array.from(fruits)
// ["Strawberry", "Mango"]


//push
const fruits = []
fruits.push('banana', 'apple', 'peach')

console.log(fruits.length)

fruits[5] = 'mango'
console.log(fruits[5])            // 'mango'
console.log(Object.keys(fruits))  // ['0', '1', '2', '5']
console.log(fruits.length)        // 6

//Increasing the length.

fruits.length = 10
console.log(fruits)              // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)) // ['0', '1', '2', '5']
console.log(fruits.length)       // 10
console.log(fruits[8])           // undefined

//Decreasing the length property does, however, delete elements.

fruits.length = 2
console.log(Object.keys(fruits)) // ['0', '1']
console.log(fruits.length)       // 2

//Creating an array
let msgArray = []
msgArray[0] = 'Hello'
msgArray[99] = 'world'

if (msgArray.length === 100) {
  console.log('The length is 100.')
}

//Creating a two-dimensional array
let board = [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] ]
  
  console.log(board.join('\n') + '\n\n')
  
  // Move King's Pawn forward 2
  board[4][4] = board[6][4]
  board[6][4] = ' '
  console.log(board.join('\n'))

  ///Using an array to tabulate  set of values
  values = []
for (let x = 0; x < 10; x++){
 values.push([
  2 ** x,
  2 * x ** 2
 ])
}
console.table(values)