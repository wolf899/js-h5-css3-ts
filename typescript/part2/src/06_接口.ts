(function () {

    //接口用来定义一个类结构,像是抽象类
    interface myInterface {
        name: string;
        age: number;
    }

    /**
     *  接口可以在定义类的时候去限制类的结构，
     *  接口中所有的属性都不能有实际的值
     *  接口只定义对象的结构而不考虑实际的值
     *  在接口中所有方法都是抽象方法
     */
    interface myInterface2 {
        name: string;
        speak(): void;
    }

    /**
     * 定义类时，可以使类实现一个接口
     * 实现接口就是使类满足接口需求
     */
    class myClass implements myInterface2{
        name: string;
        constructor(name:string){
            this.name = name
        }
        speak(): void {
            console.log("hi")
        }
        
    }

})();