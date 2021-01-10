export default class Snake {
    // 蛇头
    head: HTMLElement
    // 蛇的身体
    bodies: HTMLCollection
    // 蛇的容器
    element: HTMLElement

    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div') as HTMLElement
        this.bodies = this.element.getElementsByTagName('div')
    }

    // 蛇头的坐标
    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(value: number) {
        this.head.style.left = value + 'px'
    }

    set Y(value: number) {
        this.head.style.top = value + 'px'
    }

    /**
     * 蛇增加身体的方法
     * 这里有一些问题，需要去完善。
     */
    addBody(){
        // element 添加div
        // @ts-ignore
        this.element.insertAdjacentHTML("beforeend", "<div/>")
    }
}