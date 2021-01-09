/**
 * 这是一个 立即执行函数
 */
(function () {
    /**
     * 描述一个对象的类型
     * 不可以重名。
     */
    type myType = {
        name: string,
        age: number
    }

    const obj: myType = {
        name: '111',
        age: 22
    }

    /**
     * 也可以使用接口来定义一个类结构应该包含的     * 属性     * 方法
     * 也可以当成类型声明去使用
     *
     * 可以重名
     */
    interface myInterface {
        name: string,
        age: number,
    }

    interface myInterface {
        gender: string,
    }

    /**
     * 上面的两个接口会组合成为一个
     */
    const obj2: myInterface = {
        name: '111',
        age: 22,
        gender: 'hhhhhh'
    }

    /**
     * 接口可以在定义类的时候限制类的结构，只定义结构，不考虑实际值。
     *
     * 所有的属性都不能有值，方法都是抽象方法也不能有方法体。
     *
     * 和抽象类不同的地方是：抽象类可以有抽象的方法，也可以有实际的方法。
     */
    interface myInter {
        name: string

        sayHello(): void
    }

    /**
     * 接口就是对类的限制。这个类就能够在特定场景中使用。
     */
    class MyClass implements myInter {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(): void {
        }

    }
})()