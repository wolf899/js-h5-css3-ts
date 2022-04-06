(function () {
    /**
     * 在自定义函数或者是类的时候，如果类型不明确，就可以使用泛型
     */
    function fn<T>(a: T): T {
        return a;
    }

    //可以直接调用具有泛型的函数
    fn(18);//不指定泛型，TS可以自动对类型进行判断

    fn<string>("hi");//指定泛型

    //泛型可以指定多个
    function fn2<T, K>(a: T, b: K): T {
        console.log(b)
        return a;
    }
    //最好指定类型
    fn2<number, string>(123, "hi");

    interface Inter {
        length: number;
    }

    //T extends Inter  表示泛型T必须是Inter的实现类（子类）
    function fn3<T extends Inter>(a: T): number {
        return a.length
    }

    class MyClass<T>{
        name: T;
        constructor(name: T) {
            this.name = name;
        }
    }

    const myc = new MyClass<string>("fff")

    console.log(myc)

})();