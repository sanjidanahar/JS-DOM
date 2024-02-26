// Strongly types languages
// int a = 5;
// string b = 'Sanjida Nahar';
// bool c = true, false;
// object students = { name: 'noya' id: 56};  
// int []  numbers = [12, 15, 20]
// string[] friends = ['abul', 'babul'];


// JS is a dynamic type language


// primitive
const a =  5;
const b = 'Samsu kopai na ekhon ar';
const d = true;


// Non-primitive  [non-primitive hole man change hle akoi jaygay refer korbe]
const ages = [5, 8, 15, 9];
const students = {id: 26, class: 9};
// console.log(typeof a, typeof b, tySpeof ages, typeof students);



let x = 5;
let y = x;
console.log(x, y)
y =7;
console.log(x, y);


let p = {job: 'developer'}
let q = p;
console.log(p, q);
q = {job: 'backend'};
console.log(p , q);


let e = {name: 'Sanjida Nahar'}
let f = e;
f.name = 'Sathy Moni';
console.log(e, f); 

