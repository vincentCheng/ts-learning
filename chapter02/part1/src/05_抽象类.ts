/**
 * 这是一个 立即执行函数
 */
(function () {
    /**
     * 抽象类就是用来当父类的。
     * 不能被实例化
     */
    abstract class Animal {
        name: string;
        age: number;

        constructor(name: string = '', age: number = 0) {
            this.name = name;
            this.age = age;
        }

        bark() {
            console.log('父类在叫')
        }

        /**
         * 抽象方法
         * abstract 开头
         * 子类必须对抽象方法重写。
         */
        abstract sayHello(): void;
    }

    class Dog extends Animal {
        sayHello(): void {
            console.log('这是对父类的抽象方法的实现。')
        }
    }

    const dog1 = new Dog();
    dog1.sayHello();
    dog1.bark()
})()