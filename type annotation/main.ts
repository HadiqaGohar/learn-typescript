// Type Annotations
// In TypeScript, you can optionally add type annotations to your variables. 
// This helps in catching errors at compile time.
//  basic type


// boolean: Represents true or false values.

let isDone: boolean = false;
console.log(isDone);  // output : false

let isDone1 : boolean = true
console.log(isDone1);  // output : true

// number: Represents numeric values.

let num: number = 6;
console.log(num);  // output : 6

// string: Represents text data.

let color: string = "blue";
color = 'red';
console.log(color);  // output : red


let str : string = "6"  // 6 is string because 6 is inside the doblue quotation ""
console.log(str); // output : 6


// any: Represents any type, allowing for dynamic content.

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
console.log(notSure); // output : false


// void: Represents the absence of any type

let person : void ;
console.log(person); // output : undefined


// null and undefined: Represent the absence of a value.

let u: undefined = undefined;
console.log(u);  // output : undefined

let n: null = null;
console.log(n);  // output :null


// never: Represents the type of values that never occur.

let value1 : never ;
// console.log(value1);  // show error because value not found


// unknown : Represent the tye is unknown

let address : unknown = "hadiqa gohar 12 true"
console.log(address);  //output :hadiqa gohar 12 true



