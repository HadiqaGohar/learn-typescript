// for Loop
// The for loop is used to execute a block of code a certain number of times.


for (let i = 0; i < 5; i++) {
  console.log(i);
}
// for...of Loop
// The for...of loop is used to iterate over the elements of an iterable (like an array or a string).


let array = [1, 2, 3, 4, 5];

for (let value of array) {
  console.log("Array :",value);
}

// for...in Loop
// The for...in loop is used to iterate over the properties of an object.

let obj = {
    a: 1,
     b: 2,
      c: 3
    };

for (let key in obj) {
  console.log(key, obj[key]);
}
// while Loop
// The while loop executes a block of code as long as the specified condition is true.

let count1 = 0;

while (count1 < 5) {
  console.log("hello");
  count1++;
}

// do...while Loop
// The do...while loop is similar to the while loop, but it executes the block of code at least once before checking the condition.


let counter = 0;

do {
  console.log(counter);
  counter++;
} while (counter < 5);

// Example: Using Different Loops
// Here’s a complete example demonstrating the different types of loops in TypeScript:


// for loop
for (let i = 0; i < 3; i++) {
  console.log(`for loop iteration ${i}`);
}

// for...of loop
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(`for...of loop: ${fruit}`);
}

// for...in loop
let person = {
    name: "Hadiqa", 
    age: 18, 
    city: "Karachi"
};

for (let key in person) {
  console.log(`for...in loop: ${key} = ${person[key]}`);
}

// while loop
let index = 0;
while (index < 3) {
  console.log(`while loop iteration ${index}`);
  index++;
}

// do...while loop
let counts = 0;
do {
  console.log(`do...while loop iteration ${counts}`);
  counts++;
} while (counts < 3);

// Loop Control Statements
// You can use break and continue to control the flow within loops.

// break: Terminates the loop.


for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
// continue: Skips the current iteration and moves to the next one.


for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}