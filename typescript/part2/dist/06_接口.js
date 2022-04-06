"use strict";
(function () {
    /**
     * 定义类时，可以使类实现一个接口
     * 实现接口就是使类满足接口需求
     */
    class myClass {
        constructor(name) {
            this.name = name;
        }
        speak() {
            console.log("hi");
        }
    }
})();
