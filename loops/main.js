// for Loop
// The for loop is used to execute a block of code a certain number of times.
for (var i = 0; i < 5; i++) {
    console.log(i);
}
// for...of Loop
// The for...of loop is used to iterate over the elements of an iterable (like an array or a string).
var array = [1, 2, 3, 4, 5];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value = array_1[_i];
    console.log("Array :", value);
}
// for...in Loop
// The for...in loop is used to iterate over the properties of an object.
var obj = {
    a: 1,
    b: 2,
    c: 3
};
for (var key in obj) {
    console.log(key, obj[key]);
}
// while Loop
// The while loop executes a block of code as long as the specified condition is true.
var count1 = 0;
while (count1 < 5) {
    console.log("hello");
    count1++;
}
// do...while Loop
// The do...while loop is similar to the while loop, but it executes the block of code at least once before checking the condition.
var counter = 0;
do {
    console.log(counter);
    counter++;
} while (counter < 5);
// Example: Using Different Loops
// Here’s a complete example demonstrating the different types of loops in TypeScript:
// for loop
for (var i = 0; i < 3; i++) {
    console.log("for loop iteration ".concat(i));
}
// for...of loop
var fruits = ["apple", "banana", "cherry"];
for (var _a = 0, fruits_1 = fruits; _a < fruits_1.length; _a++) {
    var fruit = fruits_1[_a];
    console.log("for...of loop: ".concat(fruit));
}
// for...in loop
var person = {
    name: "Hadiqa",
    age: 18,
    city: "Karachi"
};
for (var key in person) {
    console.log("for...in loop: ".concat(key, " = ").concat(person[key]));
}
// while loop
var index = 0;
while (index < 3) {
    console.log("while loop iteration ".concat(index));
    index++;
}
// do...while loop
var counts = 0;
do {
    console.log("do...while loop iteration ".concat(counts));
    counts++;
} while (counts < 3);
// Loop Control Statements
// You can use break and continue to control the flow within loops.
// break: Terminates the loop.
for (var i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}
// continue: Skips the current iteration and moves to the next one.
for (var i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
