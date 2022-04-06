class Person{

    //定义属性
    //readonly只读，无法修改
    readonly name = "fzs";
    //static 静态属性  不能通过实例对象访问，只能通过类访问
    static age = 18;

    //定义方法
    sayHi(){
        console.log("hi!")
    }


}

const per = new Person();

console.log(per)

console.log(Person.age)

per.sayHi();
