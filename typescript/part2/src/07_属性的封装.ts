(function(){

    class Person{
        /**
         * public 公共的
         * private 私有的,只能在类内部访问
         *  可以通过在类中添加方法使私有属性在外面也可以被访问
         * protected 受保护的 只能在当前类和当前类的子类中访问
         */
        private _name:string;
        private _age:number;

        constructor(name:string,age:number){
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
        get name(){
            console.log("调用get name方法了")
            return this._name
        }
        set name(value:string){
            this._name = value
        }

        get age(){
            return this._age
        }

        set age(value:number){
            if(value >= 0){
                this._age = value
            }
        }
    }

    //可以直接在构造函数中定义属性的类型
    class f123{
        constructor(public age:number,public name:string){

        }
    }

    const f2 = new f123(18,"fzs")

    const per = new Person("fzs",18);

    per.name = "fff"

    console.log(per.name)
    console.log(f2)

})();