// 1. String concatenation
console.log('mv' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log("insung\'s \nbook");

// 2. Numberic operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;

// 5. Comparison operators
console.log(10 < 6); // less than

// 6. Logical operators: || (or), && (and), ! (not)
// true 값이 먼저 나오게 되면 true로 나오게 된다.
// 복잡한 식을 가장 뒤에 넣는게 좋다.

// 7. Equality
// == loose quality, with type conversion - 타입이 달라두댐
// === strick equality, no type conversion - 타입이 달르면 안됌

// object equality by reference
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 == ellie2); // false
console.log(ellie1 == ellie3); // false

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false - different type
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else


// 9. Ternary operator: ?
// condition ? value1 : value2;
const name = 'd';
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.

// do while loop, body code is executed first,
// then check the condition.

// for loop, for(begin; condition; step)

// inline variable declaration

// nested loops 

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i <= 10; i++){
    if (i % 2 !== 0){
        continue;
    }
    console.log(i);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i <= 10; i++){
    if (i == 8)
        break;
    console.log(i);   
}

