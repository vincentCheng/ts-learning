"use strict";
/**
 * 这是一个 立即执行函数
 */
(function () {
    // 这里是作用域，这样可以规避class重名警告
    class Animal {
        constructor(name = '', age = 0) {
            this.name = name;
            this.age = age;
        }
        bark() {
            console.log('父类在叫');
        }
    }
    class Cat extends Animal {
        /**
         * 父类的构造函数已经被重载
         * 那么这时候需要使用super()启动父类的构造函数。
         *
         * 这样实例化出来的对象中，就有父类的 name age 属性。
         *
         * 如果不写这个构造函数，那么会默认使用父类的。
         * @param color
         * @param name
         * @param age
         */
        constructor(color = 'red', name = '', age = 0) {
            // 注意这里需要这样使用。
            // 这样的用法是最多的，下面函数中的用法反到没这么多。
            super(name, age);
            this.color = color;
        }
        bark() {
            // super 表示的就是父类。
            super.bark();
        }
    }
    const cat = new Cat('red', '小黑猫', 10);
    cat.bark();
    console.log(cat);
})();
