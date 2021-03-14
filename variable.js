// 1. Use strict
// added in ES 5
// use this ofr Valina Javascript.
'use strict';

// 2. variable, rw(read/write)
// let (added in ES6)
let globalName = 'globalname';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(globalName);

// var (don't evber use this!)
// 선언을 하지 않아도 값을 출력할 수 있다. 그래서 var을 사용하지 않는다.
// var hoisting (move declaration from bottom to top)
// has no block scope


// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.


const daysInWeek = 7;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons;
// - security
// - thread safety
// - reduce human mistakes


// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function

// number
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;

// 5. Dymanic typing : dynamically typed lanuage
let text = 'hello';
console.log(`value: ${text}, type: ${ typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';


