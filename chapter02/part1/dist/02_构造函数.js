"use strict";
class Dog {
    constructor(name = '', age = 0) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log('看看this', this);
    }
}
const dog = new Dog('小黑', 10);
const dog2 = new Dog();
console.log(dog);
console.log(dog2);
dog.bark();
dog2.bark();
