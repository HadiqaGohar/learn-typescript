
// Using square brackets ([]):


let numbers1: number[] = [1, 2, 3, 4, 5];
console.log(numbers1);

let names1: string[] = ["Hadiqa", "Gohar"];
console.log(names1);


// Using the Array generic type:


let numbers2: Array<number> = [1, 2, 3, 4, 5];
console.log(numbers2);

let names2: Array<string> = ["Hello", "World"];
console.log(names2);


// .................................Array Methods......................................
// TypeScript arrays come with a variety of methods to manipulate and interact with the data:


let fruits: string[] = ["apple", "banana"];


// >>>> push: Adds one or more elements to the end of an array.
 fruits.push("cherry");
 console.log(fruits);    // fruits is now ["apple", "banana", "cherry"]


// >>>> pop: Removes the last element from an array and returns that element.
let lastFruit: string|undefined = fruits.pop();
console.log(lastFruit);  // lastFruit is "cherry", and fruits is now ["apple", "banana"]


// >>>> shift: Removes the first element from an array and returns that element.
let firstFruit: string|undefined = fruits.shift();
console.log(firstFruit);  // firstFruit is "apple", and fruits is now ["banana"]


// >>>> unshift: Adds one or more elements to the beginning of an array.
fruits.unshift("kiwi");
console.log(fruits);   // fruits is now ["kiwi", "banana"]


// >>>> splice: Adds or removes elements from an array.
fruits.splice(1, 0, "orange", "grape");
console.log(fruits);  // fruits is now ["kiwi", "orange", "grape", "banana"]


// >>>> slice: Returns a shallow copy of a portion of an array.
let citrus: string[] = fruits.slice(1, 3);
console.log(citrus);
// citrus is ["orange", "grape"], and fruits is unchanged


// >>>> map: Creates a new array with the results of calling a provided function on every element.
let lengths: number[] = fruits.map(fruit => fruit.length);
console.log(lengths);
// lengths is [4, 6, 5, 6]


// >>>> filter: Creates a new array with all elements that pass the test implemented by the provided function.
let longFruits: string[] = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);
// longFruits is ["orange", "banana"]

// >>>> reduce: Applies a function against an accumulator and each element in the array to reduce it to a single value.
let totalLength: number = fruits.reduce((total, fruit) => total + fruit.length, 0);
console.log(totalLength); // totalLength is 21


// >>>> indexof
let idx : number = fruits.indexOf("orange")
console.log(idx);  // 1

let idx2 : number | string = fruits[2]
console.log(idx2);  // grapes

//--------------------------------------------------------------------------

console.log(">>>>>>>>>EXAMPLE>>>>>>>>>");

// Here's a complete example demonstrating various array operations:


let numbers: number[] = [1, 2, 3, 4, 5];

// Add elements to the end
numbers.push(6, 7);
console.log(numbers);  //[1, 2, 3, 4, 5, 6, 7]


// Remove the last element
let lastNumber: number|undefined = numbers.pop();
console.log(numbers);  // remove 7


// Add elements to the beginning
numbers.unshift(0);
console.log(numbers);  //[ 0, 1, 2, 3, 4, 5, 6 ]


// Remove the first element
let firstNumber: number|undefined = numbers.shift();
console.log(firstNumber);  // remove 0


// Add/Remove elements at specific position
numbers.splice(2, 1, 10, 11); // Remove 1 element at index 2 and add 10 and 11
console.log(numbers);


// Iterate over the array
numbers.forEach(number => {
  console.log(number);
});


// Create a new array with the results of calling a provided function
let squares: number[] = numbers.map(number => number * number);
console.log(squares);


// Filter elements
let evenNumbers: number[] = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);


// Reduce the array to a single value
let sum: number = numbers.reduce((total, number) => total + number, 0);

console.log("Numbers:", numbers);
console.log("Squares:", squares);
console.log("Even Numbers:", evenNumbers);
console.log("Sum:", sum);