// encapsulation : Wrapping data (properties) and behavior (methods) together in one unit (object).
class Person {
    constructor(name, age) {
        this.name = name; // property
        this.age = age;
    }
    greet() { // method
        console.log(`Hello, my name is ${this.name}`);
    }
}
let p1 = new Person("Shekhar", 25);
p1.greet(); // Hello, my name is Shekhar

// Abstraction : Hiding complex implementation details and showing only the necessary features.
class Car {
    startEngine() { console.log("Engine started"); }
    drive() { console.log("Car is moving"); }
}
let c1 = new Car();
c1.drive(); // We don’t see *how* the engine works, just the action.


//Inheritance : One class can inherit properties and methods from another.
class Animal {
    speak() { console.log("Animal makes a sound"); }
}
class Dog extends Animal {
    speak() { console.log("Dog barks"); }
}
let d1 = new Dog();
d1.speak(); // Dog barks


//polymorphism : Same method name, but different behavior depending on the object.
class Shape {
    draw() { console.log("Drawing a shape"); }
}
class Circle extends Shape {
    draw() { console.log("Drawing a circle"); }
}
class Square extends Shape {
    draw() { console.log("Drawing a square"); }
}

let shapes = [new Circle(), new Square()];
shapes.forEach(s => s.draw());

/*there are 4 ways to create objects in javascript */

// 1. Object Literal
let person1 = {
    name: "Shekhar",
    greet: function () {
        console.log(`Hello, I am ${this.name}`);
    }
};
person1.greet(); // Hello, I am Shekhar


// 2. Constructor Function
function Person2(name) {
    this.name = name;
    this.greet = function () {
        console.log(`Hello, I am ${this.name}`);
    };
}
let person2 = new Person2("Ravi");
person2.greet(); // Hello, I am Ravi


// 3. ES6 Class
class Person3 {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
}
let person3 = new Person3("Kiran");
person3.greet(); // Hello, I am Kiran


// 4. Object.create()
let proto = {
    greet: function () {
        console.log(`Hello, I am ${this.name}`);
    }
};
let person4 = Object.create(proto);
person4.name = "Anil";
person4.greet(); // Hello, I am Anil
