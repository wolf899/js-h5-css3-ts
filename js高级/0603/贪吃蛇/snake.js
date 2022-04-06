//蛇的自调用函数
(function () {
    //存放蛇的数组
    var elements = [];
    //创建蛇的函数
    function Snake(width, height, direction) {
        //蛇每块的长度
        this.width = width || 20;
        this.height = height || 20;
        //蛇的身体
        this.body = [{
                x: 3,
                y: 2,
                color: "red"
            }, //头
            {
                x: 2,
                y: 2,
                color: "orange"
            }, //身体
            {
                x: 1,
                y: 2,
                color: "orange"
            }, //身体
        ]
        //方向
        this.direction = direction || "right";
    };
    //蛇初始化的方法
    Snake.prototype.init = function (map) {
        //先删除
        remove();
        for (i = 0; i < this.body.length; i++) {
            var obj = this.body[i];
            var div = document.createElement("div");
            map.appendChild(div);
            div.style.position = "absolute";
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.backgroundColor = obj.color;
            div.style.left = obj.x * this.width + "px";
            div.style.top = obj.y * this.height + "px";
            elements.push(div);

        }
    };
    //蛇移动的函数 
    Snake.prototype.move = function (food, map) {
        //i表示蛇身体几块
        var i = this.body.length - 1;
        //已经定义过i，可以不定义直接写；
        for (; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        switch (this.direction) {
            case "right":
                this.body[0].x += 1;
                break;
            case "left":
                this.body[0].x -= 1;
                break;
            case "top":
                this.body[0].y -= 1;
                break;
            case "bottom":
                this.body[0].y += 1;
                break;
        }
        // console.log("this.direction" + this.direction);
        //蛇头坐标
        var headX = this.body[0].x * this.width;
        var headY = this.body[0].y * this.height;
        //判断是否吃到食物
        if (headX == food.x && headY == food.y) {
            var lastBody = this.body[this.body.length - 1];
            this.body.push({
                x: lastBody.x,
                y: lastBody.y,
                color: lastBody.color
            });
            food.init(map);
        }
    };
    //删除蛇的函数
    function remove() {
        var i = elements.length - 1;
        //蛇头也要删，所以是>=0
        for (; i >= 0; i--) {
            var ele = elements[i];
            ele.parentNode.removeChild(ele);
            elements.splice(i, 1);
        }
    };
    window.Snake = Snake;
}());