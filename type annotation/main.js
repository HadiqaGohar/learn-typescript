// Type Annotations
// In TypeScript, you can optionally add type annotations to your variables. 
// This helps in catching errors at compile time.
//  basic type
// boolean: Represents true or false values.
var isDone = false;
console.log(isDone); // output : false
var isDone1 = true;
console.log(isDone1); // output : true
// number: Represents numeric values.
var num = 6;
console.log(num);
// string: Represents text data.
var color = "blue";
color = 'red';
console.log(color);
var str = "6"; // 6 is string because 6 is inside the doblue quotation ""
console.log(str); // output : 6
// any: Represents any type, allowing for dynamic content.
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
console.log(notSure); // output : false
// void: Represents the absence of any type
var person;
console.log(person); // output : undefined
// null and undefined: Represent the absence of a value.
var u = undefined;
console.log(u); // output : undefined
var n = null;
console.log(n); // output :null
// never: Represents the type of values that never occur.
var value1;
// console.log(value1);  // show error because value not found
// unknown : Represent the tye is unknown
var address = "hadiqa gohar 12 true";
console.log(address); //output :hadiqa gohar 12 true
