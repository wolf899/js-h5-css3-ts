(function () {
    class Animal {

        name: string;

        constructor(name: string) {
            this.name = name;
        }

        speak() {
            console.log("动物在叫!");
        }
    }

    class Dog extends Animal {
        age: number;
        constructor(name: string, age: number) {
            //如果在子类中写了构造函数，必须调用父类的构造函数
            super(name);
            this.age = age;
        }
        // speak(){
        //     super.speak();
        // }
    }

    const dog = new Dog("旺财",5);
    dog.speak();

})();