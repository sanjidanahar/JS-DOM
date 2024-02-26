// // const x = false;
// const x = 0;
// const x = 4;
// if(x){
//     console.log('value of x is truthy');
// }
// else{
//     console.log('value of x is falsy');
// }



// const x = 'Solaiman';
// const x = '';
// const x = false;
// const x = 'false';

// let x;
// let x = null;
// let x = {a:5, b:6};
// let x = [];
let x = [5, 6];
console.log(x);

if(x){
    console.log('value of x is truethy');
}
else{
    console.log('value of x is falsey');
}


// optional

// check falsy
// const y = '';
const y = null;
if(!y){
    console.log('value is falsy');
}


// check truthy
// const z = ' ';
// const z = 50;
const z = {class: 15};

if(!!z){
    console.log('value is truethy');
}