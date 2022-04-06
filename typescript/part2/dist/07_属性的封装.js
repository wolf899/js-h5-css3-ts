"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        // getName(){
        //     return this.name
        // }
        // setName(value:string){
        //     this.name = value
        // }
        // getAge(){
        //     return this.age
        // }
        // setAge(value:number){
        //     this.age = value
        // }
        //TS中设置getter方法的方式
        get name() {
            console.log("调用get name方法了");
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    //可以直接在构造函数中定义属性的类型
    class f123 {
        constructor(age, name) {
            this.age = age;
            this.name = name;
        }
    }
    const f2 = new f123(18, "fzs");
    const per = new Person("fzs", 18);
    per.name = "fff";
    console.log(per.name);
    console.log(f2);
})();
