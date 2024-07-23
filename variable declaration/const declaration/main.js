// const: Used to declare block-scoped variables whose value cannot be reassigned. 
// However, the contents of the object or array the const variable points to can still be changed.
var age = 18;
// age = 19; // This will cause an error
console.log(age);
// object {...}
var person = { name: "Hadiqa", age: 18 };
console.log(person.age = 19); // This is allowed
// Output : 19
