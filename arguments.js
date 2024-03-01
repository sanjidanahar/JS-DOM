// array like object
function sum(a, b, c){
    const args = [...arguments];
    console.log(args);
    console.log(arguments);
    console.log(typeof arguments);
    console.log(arguments[4]);
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(45, 25, 10,22, 16, 11, 20);
// console.log(total);

console.log(sum.length);

