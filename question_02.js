// Write a function that takes an object with name, age and occupation properties and
// returns a string with the person’s information. Use object destructuring to assign the
// properties to variables.
const info=(person)=>{
    let {n , a , o}=person;
    return `My name is ${n} . I am ${a} years old and my occupation is ${o}`
}
let person={
    name:"Hafsa",
    age:20,
    occupation:"Software Engineer"
}
console.log(info(person));