const fs = require("fs");

console.log("Before");
let f1KaPromise = fs.promises.readFile("f1.txt");

f1KaPromise.then(function(data){
    console.log(data+" ");
    let f2KaPromise = fs.promises.readFile("f2.txt");
    return f2KaPromise; 
}).then(function(data){
    console.log(data+" ");
}).catch(function(error){
    console.log(error);
})







//resolve for f1 
// f1KaPromise.then(function(data){
//     console.log(data+" ");
// });

//reject for f1
// f1KaPromise.catch(function(error){
//     console.log(error+" ");
// });

//resolve for f2 
// f2kaPromise .then(function(data){
//     console.log(data+" ");
// });

//reject for f2
// f2kaPromise .catch(function(error){
//     console.log(error+" ");
// });
// console.log("After");