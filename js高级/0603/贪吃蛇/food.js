//食物的自调用函数
(function () {
    //用数组保存食物
    var elements = [];
    //食物默认属性
    function Food(x, y, width, height, color) {
        //默认小方块宽高20
        this.width = width || 20;
        this.height = height || 20;
        this.x = x || 0;
        this.y = y || 0;
        this.color = color || "green";
    };
    //创建小方块方法
    Food.prototype.init = function (map) {
        //先删除
        remove();
        //创建div
        var div = document.createElement("div");
        map.appendChild(div);
        div.style.position = "absolute";
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.color;
        //随机xy坐标
        this.x = parseInt(Math.random() * map.offsetWidth / this.width) * this.width;
        this.y = parseInt(Math.random() * map.offsetHeight / this.height) * this.height;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
        //把div加入到数组中
        elements.push(div);
    };
    //删除食物
    function remove() {
        for (var i = 0; i < elements.length; i++) {
            var ele = elements[i];
            //找到这个元素父元素，然后通过父元素删除子元素
            ele.parentNode.removeChild(ele);
            //再把elements数组中的子元素也删除
            elements.splice(i, 1);
        }
    };
    //能让外部访问
    window.Food = Food;
}());