/**
 * 通过id名称拿到元素
 * @param {String} id id名
 * @returns 元素对象
 */
function getId(id) {
    return document.getElementById(id);
};
/**
 * 通过class名称拿到元素
 * @param {String} className 类名
 * @returns 元素对象
 */
function getClassName(className) {
    return document.getElementsByClassName(className);
};
/**
 * 通过标签名拿到元素
 * @param {String} tagName 标签名
 * @returns 元素对象
 */
function getTagName(tagName) {
    return document.getElementsByTagName(tagName);
};
/**
 * 拿到该元素计算后样式的属性值
 * @param {String} element 元素
 * @param {*} attr 属性
 * @returns CSSStyleDeclaration 类型的对象
 */
function getStyle(element, attr) {
    return getComputedStyle(element)[attr];
};
/**
 * 动画函数
 * @param {*} element 元素
 * @param {object} json 对象(属性跟属性值)
 * @param {*} fn 函数
 */
function moveElement(element, json, fn) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //boolean用来判断所有属性是否都变换到位
        var boolean = true;
        //循环遍历对象json，新建一个attr当做属性
        for (var attr in json) {
            if (attr == "opacity") {
                //获取当前透明度*100方便计算
                var current = getStyle(element, attr) * 100;
                var target = json[attr] * 100;
                var distance = (target - current) / 10;
                distance = distance > 0 ? Math.ceil(distance) : Math.floor(distance);
                current += distance;
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") {
                element.style[attr] = json[attr];
            } else {
                var current = parseInt(getStyle(element, attr));
                //需要到达的位置就是json中的attr属性的值
                var target = json[attr];
                var distance = (target - current) / 10;
                distance = distance > 0 ? Math.ceil(distance) : Math.floor(distance);
                current += distance;
                element.style[attr] = current + "px";
            }
            //所有属性没有都变换完成时，boolean=false，下一个定时器开始时，重新再循环一遍
            if (current != target) {
                boolean = false;
            }
        }
        //当所有属性都变换完成时，停止定时器
        if (boolean) {
            clearInterval(element.timeId);
            //如果有fn函数再全部属性加载完后执行
            if (fn) {
                fn();
            }
        }
    }, 20);
};