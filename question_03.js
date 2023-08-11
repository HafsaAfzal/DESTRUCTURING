// Write a function that takes an array of objects with name and score properties and
// returns the name of the person with the highest score. Use array destructuring and the
// spread operator (...) to get the first element and the rest of the array.
const winner=(arr)=>{
    let [per1,...rest]=arr;
    let highestScore=per1.score;
    let highestScorerName=per1.name;
    for (let i=0;i<rest.length;i++){
        let per=rest[i];
        if(per.score>per1.score){
            highestScore=per.score;
            highestScorerName=per.name;
        }
    }
    return(`Highest Scorer Name : ${highestScorerName} \n Highest Score : ${highestScore}`)
    
}
arr =[
obj1={
    name:"Hafsa", 
    score:95
},
obj2={
    name:"Horrain",
    score:90
},
obj3={
    name:"Huma",
    score:70
},
obj={
    name:"Hareem",
    score:94
}
];
console.log(winner(arr));