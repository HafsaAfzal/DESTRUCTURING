// Write a function that takes an object with name, age and occupation properties and
// returns a string with the person’s information. Use object destructuring to assign the
// properties to variables.
const info=(person)=>{
    let {name, age, occupation}=person;
    return `My name is ${name} . I am ${age} years old and my occupation is ${occupation}`
}
let person={
    name:"Hafsa",
    age:20,
    occupation:"Software Engineer"
}
console.log(info(person));