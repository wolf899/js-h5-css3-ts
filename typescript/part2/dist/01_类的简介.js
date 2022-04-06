"use strict";
class Person {
    constructor() {
        //定义属性
        //readonly只读，无法修改
        this.name = "fzs";
    }
    //定义方法
    sayHi() {
        console.log("hi!");
    }
}
//static 静态属性  不能通过实例对象访问，只能通过类访问
Person.age = 18;
const per = new Person();
console.log(per);
console.log(Person.age);
per.sayHi();
