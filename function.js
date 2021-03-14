// Function
// - fundamental building block in the program
// - subprogram can be usedmultiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return;}
// one function === one thing
// function is object in JS

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMassage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMassage('Hi');

// 4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope

// 6. Return a value

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if (user.point > 10){
        // long upgrade logic...
    }
}

// good
function upgradeUser(user){
    if (user.point <= 10){
        return;
    }
     // long upgrade logic...
}

// First-class function
// Function are treated like any other variable.
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// con be returned by another function.

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function
    console.log('print');
};

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes!');
}
// name function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous

const simplePrint = function () {
    console.log('simplePrint!');
}

// const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something
    return a + b;
};

// IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();

// Fun quiz time
// function calculate(command, a, b);
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b){
    switch (command){
        case 'add':
            console.log(a + b);
            break;
        case 'substract':
            console.log(a - b);                               
            break;
        case 'divide':
            console.log(a / b);   
            break;
        case 'multiply':
            console.log(a * b);
            break;
        case 'remainder':
            console.log(a % b);
            break;
        default:
            console.log('text error!');
    }
}
calculate('add', 1, 2);
