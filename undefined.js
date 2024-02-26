
let first ;
// console.log(first);

function second(a,b){
    const total = a + b;
}

const result = second();

function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a , b, c, d);
}
// third(2,5);
// console.log(third)
// console.log(result);


function noNegetive(a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}
const total = noNegetive(2, -5);
// console.log(total);


const fifth = {id: 2, name: 'ponchom', age: 40}
// console.log(fifth.age, fifth.salary);


const six = [4, 5, 8, 1, 3];

// you should not do it. Instead use splice
delete six[1];
// console.log(six[1],six[5],six[100]);
// console.log(six);


const seven = undefined;

const eight = null;

const data = {results: [], update:null}

// console.log(typeof undefined);
console.log(typeof null);