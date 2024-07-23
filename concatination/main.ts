//................... String Concatenation................................

// Using the + Operator:
// The + operator can be used to concatenate two or more strings.


let greeting1: string = "Hello";
let name1: string = "Hadiqa";
let message1: string = greeting1 + ", " + name1 + "!";
console.log(message1); // "Hello, Hadiqa!"


// Using Template Literals:
// Template literals provide a more readable and convenient way to concatenate strings, especially when including variables or expressions.


let greeting2: string = "Hello";
let name2: string = "Gohar";
let message2: string = `${greeting2}, ${name2}!`;
console.log(message2); // "Hello, Hadiqa!"


// ...........................Array Concatenation....................................
// Array concatenation can be done using the concat method or the spread operator (...).

// Using the concat method:


let array1: number[] = [1, 2, 3];
let array2: number[] = [4, 5, 6];
let concatenatedArray: number[] = array1.concat(array2);
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]


// Using the spread operator (...):


let array3: number[] = [1, 2, 3];
let array4: number[] = [4, 5, 6];
let concatenatedArray1: number[] = [...array3, ...array4];
console.log(concatenatedArray1); // Output: [1, 2, 3, 4, 5, 6]

