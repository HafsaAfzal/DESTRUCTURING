// Write a function that takes an object with firstName, lastName and middleName
// properties and returns a string with the person’s initials. Use object destructuring with
// default values to assign the properties to variables.
const initialls=(obj)=>{
    let {firstName,middleName="A",lastName}=obj;
    return `${firstName.charAt(0)}${middleName.charAt(0)}${lastName.charAt(0)}`
}
let obj={
    firstName:"Hafsa" ,
    middleName:"" ,
    lastName:"Afzal",
}
console.log(initialls(obj));