"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        speak() {
            console.log("动物在叫!");
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            //如果在子类中写了构造函数，必须调用父类的构造函数
            super(name);
            this.age = age;
        }
    }
    const dog = new Dog("旺财", 5);
    dog.speak();
})();
