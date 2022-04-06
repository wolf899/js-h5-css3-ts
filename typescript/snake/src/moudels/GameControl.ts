import Snake from "./Snake"
import Food from "./Food"
import ScorePanel from "./ScorePanel"

//游戏控制器类
class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    //存储蛇移动的方向
    direction: string = '';

    //记录游戏是否还能玩
    isLive: boolean = true;

    constructor() {
        this.food = new Food();
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    //游戏初始化
    init() {
        //绑定键盘按下事件  绑定this
        document.addEventListener('keydown', this.keydownHandel.bind(this));
        //蛇移动
        this.run();
    }

    //键盘按下
    keydownHandel(e: KeyboardEvent) {
        this.direction = e.key;
    }

    //控制蛇移动
    run() {
        //获取蛇的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }

        //调用判断蛇是否吃到食物的方法
        this.eatFood(X,Y)

        //捕捉异常
        try {
            //修改蛇的X,Y
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e: any) {
            alert(e.message + "游戏结束!")
            this.isLive = false;
        }

        //开启定时器
        this.isLive && setTimeout(this.run.bind(this), 400 - ((this.scorePanel.level - 1) * 30));

    }

    //判断蛇是否吃到食物
    eatFood(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y){
            //食物刷新
            this.food.change();
            //分数增加
            this.scorePanel.addScore();
            //蛇长一节
            this.snake.addBody();
        }
    }

}

export default GameControl
