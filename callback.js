function greeting(greetingHandler,name){
    // console.log(greetingHandler());
    greetingHandler(name);
}

// const name = 'Halim mama';
// const number = [45, 78, 20];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'}

function greetingHandler(name){
    console.log('Good Morning',name);
}


function greetEvining(name){
    console.log('Good Evining',name);
}
// greeting(laptop);
greeting(greetingHandler,'Tom Hanks');
greeting(greetingHandler,'Tom Brady');
greeting(greetingHandler,'Tom Bravo');

greeting(greetEvining,'Tom Solaiman');

function submitHandler(){
    console.log('submit button clicked');
}

// overall
document.getElementById('btn-submit').addEventListener('click',submitHandler)