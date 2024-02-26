// always use ===
// equal comparison doesn't work for non-primitive


// const first = 1;
// const first = '0';
// const first = {x:5};
// const first = [];
const first = [1,5,8,9,10];
const second = [1,5,8,9,10];

// const second = '2';
// const second = true;
// const second = false;
// const second = {x:5};
// const second = [];
// const second = first;
if(first === second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}


// type coercion
// type conversion
// types casting
