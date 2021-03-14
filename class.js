'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);       
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and Setter
class User {
    constructor(firstName, lastname, age){
        this.firstName = firstName;
        this.lastname = lastname;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        // if (value < 0){
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!

// 4. Static properties and methods
// Too soon!

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
} 

class Triangle extends Shape{
    draw() {
        super.draw();
        console.log('▲');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Triangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

// 6. Class checking: instanceOf
console.log(triangle instanceof Object);