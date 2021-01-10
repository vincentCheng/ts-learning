import '@/style/index.less'

/**
 * 食物类，这个比较简单，先定义了。
 */
class Food {
    // 食物对应的html元素
    element: HTMLElement

    constructor() {
        // 这里最后面加叹号，表示不可能为null。
        this.element = document.getElementById('food')!
    }

    /**
     * 当蛇的坐标等于食物的坐标，那么食物消失。
     * @constructor
     */
    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }

    // 修改食物的位置
    change() {
        /**
         * 生成随机的位置
         * 最小是left等于0，最大是left加上方框的宽度。
         *
         * 蛇的移动单位：10px/次，所以食物的坐标必须是整10px的倍数。
         *
         * Math.round 四舍五入，这样确保得到的是 0-30之间的整数
         */
        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

// 测试代码
// const food = new Food();
// console.log(food.X, food.Y);
// food.change()