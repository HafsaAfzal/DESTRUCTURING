// Write a function that takes an array of strings and returns an object with two properties:
// first, which is the first element of the array, and last, which is the last element of the
// array. Use array destructuring and shorthand property names to create the object.
const generateObj=(str)=>{
    let[name,...rest]=str;
    // console.log(str1);
    let age=rest.length-1;
    obj={
       name,
       age
    }
    return obj
}
let str=["Hafsa","Aaman",22,20];
console.log(generateObj(str));