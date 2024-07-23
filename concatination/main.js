//................... String Concatenation................................
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Using the + Operator:
// The + operator can be used to concatenate two or more strings.
var greeting1 = "Hello";
var name1 = "Hadiqa";
var message1 = greeting1 + ", " + name1 + "!";
console.log(message1); // "Hello, Hadiqa!"
// Using Template Literals:
// Template literals provide a more readable and convenient way to concatenate strings, especially when including variables or expressions.
var greeting2 = "Hello";
var name2 = "Gohar";
var message2 = "".concat(greeting2, ", ").concat(name2, "!");
console.log(message2); // "Hello, Hadiqa!"
// ...........................Array Concatenation....................................
// Array concatenation can be done using the concat method or the spread operator (...).
// Using the concat method:
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]
// Using the spread operator (...):
var array3 = [1, 2, 3];
var array4 = [4, 5, 6];
var concatenatedArray1 = __spreadArray(__spreadArray([], array3, true), array4, true);
console.log(concatenatedArray1); // Output: [1, 2, 3, 4, 5, 6]
