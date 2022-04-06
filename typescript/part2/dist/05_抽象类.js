"use strict";
(function () {
    //abstract抽象类， 不能用来创建对象，抽象类就是专门用来被继承的类
    class Animal {
        constructor(name) {
            this.name = name;
        }
        speak() {
            console.log("动物在叫!");
        }
    }
    class Dog extends Animal {
        speak() {
            console.log("汪汪汪");
        }
        say() {
            console.log("重写抽象类");
        }
    }
    const dog = new Dog("旺财");
    dog.speak();
})();
