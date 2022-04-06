"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        speak() {
            console.log("动物在叫!");
        }
    }
    class Dog extends Animal {
        speak() {
            console.log("汪汪汪!");
        }
    }
    class Cat extends Animal {
        speak() {
            console.log("喵喵喵!");
        }
    }
    const dog = new Dog("旺财", 5);
    const cat = new Cat("小白", 3);
    console.log(dog);
    console.log(cat);
    dog.speak();
    cat.speak();
})();
