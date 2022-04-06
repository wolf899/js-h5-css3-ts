//整个游戏对象的自调用
(function () {
    //用来保存游戏的实例对象
    var that = null;

    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    };
    Game.prototype.init = function () {
        //初始化食物跟蛇
        this.food.init(this.map);
        this.snake.init(this.map);
        //蛇动起来
        this.run(this.food, this.map);
        //按键方法
        this.keyboard();
    };
    //让蛇动起来
    Game.prototype.run = function (food, map) {
        var timeId = setInterval(function () {
            this.snake.move(food, map);
            this.snake.init(map);
            //最大横纵坐标
            var maxX = map.offsetWidth / this.snake.width;
            var maxY = map.offsetHeight / this.snake.height;
            //蛇头坐标位置
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;
            //如果蛇头超过最大范围停止定时器
            if (headX < 0 || headX >= maxX) {
                clearInterval(timeId);
                alert("游戏结束");
            }
            if (headY < 0 || headY >= maxY) {
                clearInterval(timeId);
                alert("游戏结束");
            }
            //蛇吃到自己游戏结束
            //因为蛇身体大于等于5的时候才有可能吃到身体
            for (var i = 4; i < this.snake.body.length; i++) {
                //蛇头吃到身体任一一个部位
                if (this.snake.body[0].x == this.snake.body[i].x && this.snake.body[0].y == this.snake.body[i].y) {
                    //停止定时器
                    clearInterval(timeId);
                    alert("吃到自己的身体，游戏结束");
                }
            }
        }.bind(that), 150);
    };

    //键盘按下事件控制蛇的方向
    Game.prototype.keyboard = function () {
        document.addEventListener("keydown", function (e) {
            switch (e.key) {
                case "ArrowLeft":
                    if (this.snake.direction != "right") {
                        this.snake.direction = "left";
                    }
                    break;
                case "ArrowUp":
                    if (this.snake.direction != "bottom") {
                        this.snake.direction = "top";
                    }
                    break;
                case "ArrowRight":
                    if (this.snake.direction != "left") {
                        this.snake.direction = "right";
                    }
                    break;
                case "ArrowDown":
                    if (this.snake.direction != "top") {
                        this.snake.direction = "bottom";
                    }
                    break;
            }
        }.bind(that), false);
    };

    window.Game = Game;
})();