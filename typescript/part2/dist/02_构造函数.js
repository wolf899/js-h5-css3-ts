"use strict";
class Dog {
    //constructor 在对象创建时直接调用
    constructor(name, age) {
        //在实例方法中，this表示当前实例
        this.name = name;
        this.age = age;
    }
    speak() {
        alert("汪汪汪!");
    }
}
const dog = new Dog("旺财", 3);
const dog2 = new Dog("小黑", 5);
console.log(dog);
console.log(dog2);
