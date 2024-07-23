// const: Used to declare block-scoped variables whose value cannot be reassigned. 
// However, the contents of the object or array the const variable points to can still be changed.

const age: number = 18;
// age = 19; // This will cause an error
console.log(age);   // Output : 18


// object {...}
const person = { name: "Hadiqa", age: 18 };
console.log(person.age = 19);   // This is allowed

// Output : 19


