//蛇
class Snake {
    //获取蛇头元素
    head: HTMLElement;
    //获取蛇身体(包括蛇头)
    bodys: HTMLCollection;
    //获取蛇容器
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div')!;
        this.bodys = document.getElementById('snake')!.getElementsByTagName('div');
    }

    //获取蛇头坐标
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }

    //设置蛇头坐标
    set X(value: number) {
        //如果新值和旧值相同，没必要修改
        if (this.X == value) {
            return;
        }
        //限制X范围
        if (value < 0 || value > 290) {
            //蛇撞墙了
            throw new Error("蛇撞墙了!")
        }

        //不让蛇水平方向掉头
        if (this.bodys[1] && (this.bodys[1] as HTMLElement).offsetLeft === value) {
            //如果发生了掉头,让蛇往反方向移动
            if (value > this.X) {
                //如果新的值大于X，则说明蛇要向右走，蛇要掉头，应该让蛇继续向左走
                value = this.X - 10;
            } else {
                //如果新的值小于X，则说明蛇要向左走，蛇要掉头，应该让蛇继续向右走
                value = this.X + 10;
            }
        }

        //让蛇移动
        this.moveBody();

        this.head.style.left = value + 'px';

        //检查蛇是否撞到自己了
        this.checkRepetition();
    }
    set Y(value: number) {
        if (this.Y == value) {
            return;
        }
        //限制Y范围
        if (value < 0 || value > 290) {
            //蛇撞墙了
            throw new Error("蛇撞墙了!")
        }

        //不让蛇垂直方向掉头
        if (this.bodys[1] && (this.bodys[1] as HTMLElement).offsetTop === value) {
            //如果发生了掉头,让蛇往反方向移动
            if (value > this.Y) {
                //如果新的值大于Y，则说明蛇要向下走，蛇要掉头，应该让蛇继续向上走
                value = this.Y - 10;
            } else {
                //如果新的值小于Y，则说明蛇要向上走，蛇要掉头，应该让蛇继续向下走
                value = this.Y + 10;
            }
        }

        //让蛇移动
        this.moveBody();

        this.head.style.top = value + 'px';

        //检查蛇是否撞到自己了
        this.checkRepetition();
    }

    //增加蛇的身体
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }

    //蛇身体跟着头移动
    moveBody() {
        for (let i = this.bodys.length - 1; i > 0; i--) {
            //获取值
            let X = (this.bodys[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodys[i - 1] as HTMLElement).offsetTop;

            //设置蛇的值
            (this.bodys[i] as HTMLElement).style.left = X + "px";
            (this.bodys[i] as HTMLElement).style.top = Y + "px";
        }
    }

    //判断蛇头有没有跟身体位置重复
    checkRepetition() {
        for (let i = 1; i < this.bodys.length; i++) {
            let body = this.bodys[i] as HTMLElement;
            if(this.X === body.offsetLeft && this.Y === body.offsetTop){
                //表示已经撞到身体了,抛出一个异常
                throw new Error("撞到自己了！")
            }
        }
    }

}

export default Snake;
