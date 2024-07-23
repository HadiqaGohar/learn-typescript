// Using square brackets ([]):
var numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1);
var names1 = ["Hadiqa", "Gohar"];
console.log(names1);
// Using the Array generic type:
var numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2);
var names2 = ["Hello", "World"];
console.log(names2);
// .................................Array Methods......................................
// TypeScript arrays come with a variety of methods to manipulate and interact with the data:
var fruits = ["apple", "banana"];
// >>>> push: Adds one or more elements to the end of an array.
fruits.push("cherry");
console.log(fruits); // fruits is now ["apple", "banana", "cherry"]
// >>>> pop: Removes the last element from an array and returns that element.
var lastFruit = fruits.pop();
console.log(lastFruit); // lastFruit is "cherry", and fruits is now ["apple", "banana"]
// >>>> shift: Removes the first element from an array and returns that element.
var firstFruit = fruits.shift();
console.log(firstFruit); // firstFruit is "apple", and fruits is now ["banana"]
// >>>> unshift: Adds one or more elements to the beginning of an array.
fruits.unshift("kiwi");
console.log(fruits); // fruits is now ["kiwi", "banana"]
// >>>> splice: Adds or removes elements from an array.
fruits.splice(1, 0, "orange", "grape");
console.log(fruits); // fruits is now ["kiwi", "orange", "grape", "banana"]
// >>>> slice: Returns a shallow copy of a portion of an array.
var citrus = fruits.slice(1, 3);
console.log(citrus);
// citrus is ["orange", "grape"], and fruits is unchanged
// >>>> map: Creates a new array with the results of calling a provided function on every element.
var lengths = fruits.map(function (fruit) { return fruit.length; });
console.log(lengths);
// lengths is [4, 6, 5, 6]
// >>>> filter: Creates a new array with all elements that pass the test implemented by the provided function.
var longFruits = fruits.filter(function (fruit) { return fruit.length > 5; });
console.log(longFruits);
// longFruits is ["orange", "banana"]
// >>>> reduce: Applies a function against an accumulator and each element in the array to reduce it to a single value.
var totalLength = fruits.reduce(function (total, fruit) { return total + fruit.length; }, 0);
console.log(totalLength); // totalLength is 21
// >>>> indexof
var idx = fruits.indexOf("orange");
console.log(idx); // 1
var idx2 = fruits[0];
console.log(idx2); // grapes
//--------------------------------------------------------------------------
console.log(">>>>>>>>>EXAMPLE>>>>>>>>>");
// Here's a complete example demonstrating various array operations:
var numbers = [1, 2, 3, 4, 5];
// Add elements to the end
numbers.push(6, 7);
console.log(numbers); //[1, 2, 3, 4, 5, 6, 7]
// Remove the last element
var lastNumber = numbers.pop();
console.log(numbers); // remove 7
// Add elements to the beginning
numbers.unshift(0);
console.log(numbers); //[ 0, 1, 2, 3, 4, 5, 6 ]
// Remove the first element
var firstNumber = numbers.shift();
console.log(firstNumber); // remove 0
// Add/Remove elements at specific position
numbers.splice(2, 1, 10, 11); // Remove 1 element at index 2 and add 10 and 11
console.log(numbers);
// Iterate over the array
numbers.forEach(function (number) {
    console.log(number);
});
// Create a new array with the results of calling a provided function
var squares = numbers.map(function (number) { return number * number; });
console.log(squares);
// Filter elements
var evenNumbers = numbers.filter(function (number) { return number % 2 === 0; });
console.log(evenNumbers);
// Reduce the array to a single value
var sum = numbers.reduce(function (total, number) { return total + number; }, 0);
console.log("Numbers:", numbers);
console.log("Squares:", squares);
console.log("Even Numbers:", evenNumbers);
console.log("Sum:", sum);
