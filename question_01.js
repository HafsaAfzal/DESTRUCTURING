// Write a function that takes an array of two numbers and returns their sum. Use array
// destructuring to assign the numbers to variables.
const sum=(arr)=>{
    let [num1 , num2]=arr;
    let add=num1+num2;
    return add
}
let arr =[2,3];
let result =sum(arr);
console.log(result);