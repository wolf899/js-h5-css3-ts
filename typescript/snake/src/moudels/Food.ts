//食物类
class Food {
    //定义一个属性表示食物所对应的元素
    element: HTMLElement;

    constructor() {
        //获取food元素
        this.element = document.getElementById('food')!;
    }

    //获取食物X坐标
    get X() {
        return this.element.offsetLeft;
    }

    //获取食物Y坐标
    get Y() {
        return this.element.offsetTop;
    }

    //食物随机生成
    change() {
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;

        this.element.style.top = top + 'px';
        this.element.style.left = left + 'px';
    }
}


export default Food;
